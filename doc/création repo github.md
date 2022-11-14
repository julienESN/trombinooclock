1. créer un repo local `git init`

Si la branche principale n'est pas main, il faut créer cette branche
`git branch -M main`

2. ajouter les fichiers et faire un premier commit `git add .` `git commit -m "message du commit"`
3. créer un repo sur github
4. lier le repo local au repo distant `git remote add [nom du repo distant] [adresse du repo]`
5. Pousser le repo local vers le repo distant `git push -u [nom du repo distant] [nom de branche à pousser]`