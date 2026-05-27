"use server"

import { httpClient } from "@/lib/axios/httpClient";
import { IArticlePaginatedResponse } from "@/types/article.types";

export interface IGetAllArticlesParams {
    q ?: string;
    page ?: number;
    pageSize ?: number;
    published ?: boolean;
}


export const getAllArticles = async (params : IGetAllArticlesParams = {}) : Promise<IArticlePaginatedResponse> => {

    const queryParams : Record<string, any> = {};

    if(params.q) queryParams.q = params.q;
    if(params.page) queryParams.page = params.page;
    if(params.pageSize) queryParams.pageSize = params.pageSize;
    if(params.published !== undefined) queryParams.published = params.published;

    const res = await httpClient.get("/posts", {
        params: queryParams
    })

    return {
        items : res.items,
        total : res.total,
        page : res.page,
        pageSize : res.pageSize
    }
}