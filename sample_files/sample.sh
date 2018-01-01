#!/bin/sh
DATE_JOUR=`date "+%Y%m%d-%Hh%M"`
FICHIER_CIBLE_COMPLET="Sources-"$DATE_JOUR"-Sauvegarde.tar.gz"

clear
cd _Sources
echo "----------------------------------------------------------------------"
echo "Création de l'archive : "$FICHIER_CIBLE_COMPLET
tar -czf ../_Sauvegardes/$FICHIER_CIBLE_COMPLET *

cd ..
chmod 775 _Sauvegardes/$FICHIER_CIBLE_COMPLET

echo "----------------------------------------------------------------------"
echo "Archives créées : "
echo $FICHIER_CIBLE_COMPLET
echo "----------------------------------------------------------------------"
pwd
ls -al --color _Sauvegardes/
