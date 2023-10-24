abstract class Paper {
  toggle = false;
  favorite = false;

  title = '';
  authors = '';
  summary = '';
  tweets = '';
  docs = '';
  code = '';
  slides = '';
  highlight = '';
  links: Array<{
    'title': string,
    'url': string
  }> = [];

  arXiv_id: string;
  arXiv: string;
  arXiv_cat: string;

  constructor() {
    this.title = '';
    this.authors = '';
    this.summary = '';
    this.tweets = '';
    this.docs = '';
    this.code = '';
    this.slides = '';
    this.highlight = '';
    this.links = [];
    this.arXiv_id = '';
    this.arXiv = '';
    this.arXiv_cat = '';
  }
}

export class ArXiv extends Paper {
  preprint_pdf = '';
  venue = '';
  constructor(override readonly arXiv_id: string) {
    super();
    this.arXiv = 'https://arxiv.org/abs/' + arXiv_id;
  }
}

export class Article extends Paper {
  venue = '';
  paper_pdf = '';
  sm_pdf = '';
  doi = '';
  constructor(readonly doi_str = '', public override arXiv_id= '') {
    super();
    this.doi = 'https://doi.org/' + doi_str;
    if (arXiv_id !== '') {
      this.arXiv = 'https://arxiv.org/abs/' + arXiv_id;
    }
  }
}
