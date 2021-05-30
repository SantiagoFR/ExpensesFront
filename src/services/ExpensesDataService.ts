import http from "@/http-common";

class ExpensesDataService {
  getAll(): Promise<any> {
    return http.get("/expenses");
  }

  get(id: any): Promise<any> {
    return http.get(`/expenses/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/expenses", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/expenses/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/expenses/${id}`);
  }

  findByAuthor(author: string): Promise<any> {
    return http.get(`/tutorials?author=${author}`);
  }
}

export default new ExpensesDataService();