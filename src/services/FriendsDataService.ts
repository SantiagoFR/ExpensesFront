import http from "@/http-common";

class FriendDataService {
  getAll(): Promise<any> {
    return http.get("/friends");
  }

  create(data: any): Promise<any> {
    return http.post("/friends", data);
  }
}

export default new FriendDataService();