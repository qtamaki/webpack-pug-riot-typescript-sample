sample
  p It's { value } sample!
  div
    button(type="button" onclick="{buttonClick}") こんにちは
    img-mount
  script(type="text/typescript").
    declare var riot:any;
    declare var opts:any;
    var test:string = 'Riot';
    this.value = opts.hello();
    this.buttonClick = e => {
      riot.mount("img-mount", "ribbon");
    }
ribbon
  img(src="/img/ribbon_ika.png")
