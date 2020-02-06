
      <?php
      $prenom = $nom = $email = $message = "";

           function securisation($donnees){
               $donnees = trim($donnees);
               $donnees = stripcslashes($donnees);
               $donnees = strip_tags($donnees);
               return $donnees;
           }
           $subject= securisation($_POST['subject']);
           $nom = securisation($_POST['nom']);
           $email = securisation($_POST['email']);
           $message = securisation($_POST['message']);

           echo 'Ton subject est :' .$subject. '<br/>';
           echo 'Ton nom est :' .$nom. '<br/>';
           echo 'Ton email est :' .$email. '<br/>';
           echo 'Ton message est :' .$message. '<br/>';       
      ?>

     <?php

$header="MIME-Version: 1.0\r\n";
$header.='From: <support@primfx.com>'."\n";
$header.='Content-Type:text/html; charset="uft-8"'."\n";
$header.='Content-Transfer-Encoding: 8bit';

$subject=$_POST['subject'];
$nom=$_POST['nom'];
$email=$_POST['email'];
$message=$_POST['message'];
$message=" ".$message." ".$subject." ". $nom ." ".$email;




mail("faycal.k@codeur.online", "mes infos", $message, $header);

?>