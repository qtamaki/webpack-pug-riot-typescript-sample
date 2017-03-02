declare function require(path: string) : any;
declare var riot : any;

export class Req {
  public req(): string {
    require("./req.tag");
    riot.mount("sample_req");
    return "ok";
  }
}
