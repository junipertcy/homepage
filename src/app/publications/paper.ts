abstract class Paper {
  toggle = false;
  favorite = false;

  title: string;
  authors: string;
  summary: string;
  tweets: string;
  docs: string;
  code: string;
  slides: string;
  highlight: string;
  links: Array<{
    'title': string,
    'url': string
  }>;

  arXiv_id: string;
  arXiv: string;
  arXiv_cat: string;
}

export class ArXiv extends Paper {
  preprint_pdf: string;
  constructor(readonly arXiv_id: string) {
    super();
    this.arXiv = 'https://arxiv.org/abs/' + arXiv_id;
  }
}

export class Article extends Paper {
  venue: string;
  paper_pdf: string;
  doi: string;
  constructor(readonly doi_str = '', public arXiv_id= '') {
    super();
    this.doi = 'https://doi.org/' + doi_str;
    if (arXiv_id !== '') {
      this.arXiv = 'https://arxiv.org/abs/' + arXiv_id;
    }
  }
}
