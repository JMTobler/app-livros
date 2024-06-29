export const Usuarios = [
    {
        email: 'teste@teste.com',
        senha: 'senha123',
    },
];

export const adicionarUsuario = (email, senha) => {
    Usuarios.push({ email, senha });
};