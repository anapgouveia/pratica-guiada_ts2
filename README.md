# pratica-guiada_ts2
Criação de um sistema de cadastro

Crie um sistema de cadastro de usuários que contenha:
1. Type Alias para uma pessoa (Person) com  as propriedades id, name, email, password e role;

2. Type Aliases de conta, com as propriedades account e permission:
- AdminAccount
- NormalAccount

Tipando e ENUMerando
Crie:
1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);

3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

4. Crie duas pessoas, uma com permissão normal e a outra admin;

5. Guarde essas pessoas no array de usuários