export class NewContentDto {
  urls: IUrl[];
}

interface IUrl {
  link: string;
  promptParams: IPromptParam[];
}

interface IPromptParam {
  [key: string]: string | categorias[];
}

enum categorias {
  'reels',
  'carrocel',
  'post',
  'videos_curtos',
  'videos_longos',
}
