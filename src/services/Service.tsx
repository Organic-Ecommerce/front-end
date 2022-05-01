import axios from "axios";
import React from "react";

export const api = axios.create({
    baseURL: 'https://organicecommerce.herokuapp.com/'
})

export const registerUser = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}


export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

//Option free access
export const buscaFree = async(url: any, setDado: any) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const busca = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

console.log(busca)

export const buscaId = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

export const deleteId = async(url: any, header: any) => {
    const resposta = await api.delete(url, header)
}