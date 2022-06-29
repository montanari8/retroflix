export interface dimensoes {
    largura?: number,
    altura?: number,
    peso?: number
}
export interface Produto{
    id ?: string,
    titulo ?: string,
    subtitulo ?: string,    
    enderecoImagem ?: string,
    dataLancamento ?: string,
    trailer ?: string,
    duracao ?: string,
    sinopse ?: string,
    fornecedor ?: string,
    cnpj ?: string,
    custo ?: number,
    valorVenda ?: number,
    quantidade ?: number,
    categoria ?: string,
    elenco ?: [],
    direcao ?: [],
    dimensoes ?: dimensoes[]
}