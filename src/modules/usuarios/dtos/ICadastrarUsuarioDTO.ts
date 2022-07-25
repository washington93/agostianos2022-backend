export default interface ICadastrarUsuarioDTO {
    nome: string;
    primeiroNome?: string;
    senha: string;
    email: string;
    telefone?: string;
    avatar?: string;
    sobre?: string;
    moldura?: string;
    pontuacao?: number;
}
