<?php

namespace App\Controller;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Security\ApikeyAuthenticator;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\UserRepository;

class ApiController extends AbstractController
{
    public function __construct(){
        $apiAuth = new ApikeyAuthenticator;
        // dump($apiAuth);
        
        
    }
    public function returnResponse(array $data){
        $response = new Response();
    
                $response->setContent(json_encode(
                    $data
                    ));
                $response->headers->set('Content-Type', 'application/json');
                        
                return $response ;
    }
    #[Route('/api/signup', name: 'app_api')]
    public function index(Request $request,UserPasswordHasherInterface $encoder,EntityManagerInterface $em,UserRepository $userRepository)
    {
        $user = new User();
        $recievedData = $request->request->all();
        $dataGet=[];
        foreach ($recievedData as $property => $value) {
            if($property!=="password"){
                
                $method = 'set' . ucfirst($property);
                if (method_exists($user, $method)) {
                    $dataGet[]=[$method,$property,$value];
                    $user->$method($value);
                }
            }
            
        }
        $check = ($userRepository->findBy(['username'=>$user->getUsername()])||$userRepository->findBy(['email'=>$user->getEmail()]));
        
        if($check){
            $data = ["msg"=>"username or email already in use"];
            return $this->returnResponse($data);
        }
        $password = $request->request->get('password');
        $plainPassword = $password;
        $encoded = $encoder->hashPassword($user, $plainPassword);
        $user->setPassword($encoded);
        $date = new \DateTimeImmutable();
        $user->setCreatedAt($date);
        $em->persist($user);
        $em->flush();
        return $this->returnResponse(["msg"=>"user created"]);
    }
}
