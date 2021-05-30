import http from "@/http-common";

class PersonDataService {
  getAll(): Promise<any> {
    return http.get("/persons");
  }

  create(data: any): Promise<any> {
    return http.post("/persons", data);
  }
}

export default new PersonDataService();