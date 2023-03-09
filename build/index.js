"use strict";
console.log('Olá MUNDO');
const Ana = {
    id: "09",
    name: "Ana Paula",
    email: "ana@gmail.com",
    password: "ana123",
    role: "ADMIN"
};
var ACCOUNT;
(function (ACCOUNT) {
    ACCOUNT["ADMIN"] = "admin";
    ACCOUNT["NORMAL"] = "normal";
})(ACCOUNT || (ACCOUNT = {}));
console.log(`Nome da pessoa${Ana.name}, seu email ${Ana.email}`);
//# sourceMappingURL=index.js.map