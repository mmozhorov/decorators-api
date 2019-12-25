import axios from "axios";
import headerParams from "./headerParams";
import { ErrorMiddleware } from "./errorMiddleware";

export default class ApplicationController {

    constructor(){
        this.baseUrl = "http://ecse005000c1.epam.com:8001/applications";
    }

    @ErrorMiddleware
    async getApplicationsByKeyWord(queries) {
        const { limit, offset, search } = queries;

        return await axios.get(this.baseUrl, {
            params: { limit, offset, search },
            headers: { ...headerParams }
        });
    }

    @ErrorMiddleware
    async createNewApplication(params) {
        return await axios.post(this.baseUrl, {
            params: { ...params },
            headers: { ...headerParams }
        });
    }

    @ErrorMiddleware
    async getApplicationById(queries) {
        const { id } = queries;
        return await axios.get(this.baseUrl + `/${id}`, {
            headers: { ...headerParams }
        });
    }

    @ErrorMiddleware
    async deleteApplication(queries) {
        const { id, version } = queries;
        return await axios.delete(this.baseUrl + `/${id}`, {
            params: { version },
            headers: { ...headerParams }
        });
    }

    @ErrorMiddleware
    async updateType(params) {
        return await axios.put(this.baseUrl + `/${params.id}/type`, {
            params: { ...params },
            headers: { ...headerParams }
        });
    }

    @ErrorMiddleware
    async getAllApplications(queries) {
        const { limit, offset } = queries;
        return await axios.get(this.baseUrl + "/all", {
            params: { limit, offset },
            headers: { ...headerParams }
        });
    }

    @ErrorMiddleware
    async filterApplications(params) {
        return await axios.put(this.baseUrl + "/filteredApplications", {
            params: { ...params },
            headers: { ...headerParams }
        });
    }

    @ErrorMiddleware
    async getNewApplicationsCount() {
        return await axios.get(this.baseUrl + "/newApplicationsCount", {
            headers: { ...headerParams }
        });
    }
}
