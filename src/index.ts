console.log('Olá MUNDO')

//PRATICA GUIADA

//criar um enum (2 parte da atv)
enum ACCOUNT{
  ADMIN= "admin",
  NORMAL= "normal"
}

//cria um type aliases
type Person = {
  id: string,
  name: string,
  email: string,
  password: string, //pode ser numero e letra junto
  role: ACCOUNT
}

//cria admin account e permission
type adminAccount = {
  account:string,
  permission: boolean  //se a pessoa tem acesso ou nao
}

type normalAccount = {
  account:string,
  permission: boolean  //se a pessoa tem acesso ou nao
}


//cria um objeto
const Ana: Person = {
  id: "09",
  name: "Ana Paula",
  email: "ana@gmail.com",
  password: "ana123", 
  role: ACCOUNT.ADMIN
}
 

console.log(`Nome da pessoa${Ana.name}, seu email ${Ana.email}`)

//tipo intersection - junção dos tipos (person + role)
type adminPerson = Person & adminAccount
type normalPerson = Person & normalAccount 
type unionPerson = normalPerson | adminPerson 

//array
const adminPersonArray : Array<adminPerson> = []
const normalPersonArray : Array<normalPerson> = []
const unionPersonArray : Array<unionPerson> = []

// 4- criar uma pessoa com permissao admin e outra normal
const userNormal_1 : normalPerson = {
  id: '001',
  name: 'ana paula',
  email: 'anapg@gmail.com',
  password: 'anap123', 
  role: ACCOUNT.NORMAL,
  account: 'AnaPaula',
  permission: false
}


const userAdmin_1 : adminPerson = {
  id: '002',
  name: 'maria',
  email: 'maria@gmail.com',
  password: 'maria123', 
  role: ACCOUNT.ADMIN,
  account: 'Maria',
  permission: true
 
}


unionPersonArray.push(userNormal_1)
unionPersonArray.push(userAdmin_1)

console.table(unionPersonArray)