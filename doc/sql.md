# Requêtes SQL

Toutes les promos, dans l'odre alphabétique

```sql
-- ASC pour ordre croissant, DESC pour ordre décroissant
SELECT * FROM "promo" ORDER BY "name" ASC;
```

Tous les étudiants, dans l'ordre alphabétique des noms de famille puis des prénoms.
```sql
SELECT * FROM "student" ORDER BY "last_name" ASC, "first_name" ASC;
```

Tous les étudiants de la promo 135
```sql
SELECT * FROM "student" WHERE "promo_id"=135;
```

Tous les étudiants dont le nom ou le prénom ressemble à "max"
```sql
SELECT * FROM "student" WHERE "last_name" ILIKE '%max%' OR "first_name" ILIKE '%max%';
```

Insérer Cuck Norris qui appartient à la promo 5
```sql
INSERT INTO "student" 
("first_name", "last_name", "github_username", "profile_picture_url", "promo_id")
VALUES
('Chuck','Norris','chuckNorris','http://chuck-norris.com/avatar.jpg', 5);
```

Insérer une promo César, sans orga github, dans la table promo
```sql
INSERT INTO "promo" ("name")
VALUES('Cesar');
```

Mettre à jour la promo 5 pour la renommer "Cleo"
```sql
UPDATE "promo"
SET "name" = 'Cleo'
WHERE "id" = 5;
```

Supprimer la promo 123
```sql
DELETE FROM "promo"
WHERE "id"=123;
```