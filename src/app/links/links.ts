// Every link the site looks up by key, through the `str2url` and `str2IntRes` pipes.
// A key used in a template must exist here: the pipes take `LinkKey`, so a misspelled
// key fails the production build instead of rendering a link to nothing.
//
// Keep this file to type-erasable syntax (no `enum`, no imports) so Node can import it
// directly for the link checks.

// Why a retired link no longer works. The wording for each is in the /bokhi/ page.
export type RetiredReason =
  | 'removed-by-owner'
  | 'domain-expired'
  | 'domain-taken-over'
  | 'server-failure'
  | 'account-removed'
  | 'file-lost';

// A link whose target is gone. It is shown at /bokhi/<key> and never linked directly.
export interface RetiredInfo {
  readonly reason: RetiredReason;
  // Completes “… and had content about ___”.
  readonly about: string;
  // When the site linked it: 'YYYY-MM-DD', 'YYYY', or 'before YYYY'.
  readonly linkedOn: string;
  // A Wayback Machine capture: https://web.archive.org/web/<14-digit timestamp>/<url>
  readonly archive?: string;
}

export interface LinkEntry {
  readonly url: string;
  readonly retired?: RetiredInfo;
}

export const LINKS = {
  // Talks
  'SSC22_video': { url: 'https://www.youtube.com/watch?v=_G65W_yBais' },
  // Certificate
  '22_OTA_cert': { url: 'https://filen.io/d/a5b01a6a-699c-4c64-b40c-f6b5a0ce9490#!tiFlwyWJsGjNk3LRq5yOeHebvujZW4N8' },
  // Abstract
  'SSC22_absYen': { url: 'https://filen.io/d/847a79e2-5637-4d78-b39d-2241a801c37b#!QDnS0Pg01pLoDmDXO8MsPSWGJO2dEEmr' },
  // Papers
  'NeurIPS26_orYen': { url: 'https://openreview.net/pdf?id=k3FgymBG6u' },
  'NeurIPS26_other': { url: 'https://openreview.net/group?id=NeurIPS.cc/2026/Workshop/AI-Native_Academia' },
  // Slide
  'Project-talk-200417-cu_boulder': { url: '/assets/pdf/slides/Project-talk-200417-cu_boulder.pdf' },
  'Research-talk-220723-tyra': { url: 'https://filen.io/d/862e0f1a-110f-4b4b-8e6e-5ed19203b638#!6IgsokBmD3jMuardqB0LEwHIBeoyDSsz' },
  'Research-talk-220602-ssc': { url: 'https://filen.io/d/d29c4c9a-6b50-4ec9-83f2-0cc4a2d718ac#!5B5OcPtWIt31jKK85M21NcS8I2FwSyE4' },
  'Research-talk-220331-acp': { url: 'https://filen.io/d/534b0f60-c552-421f-bf65-a48f5d2187bb#!qWTFOEX8PKYzHVOP4q9OgLntrcGv43OL' },
  'Research-talk-201107-project_tyra': { url: 'https://filen.io/d/f995961a-ed4b-4e8a-82c3-33dd1e5865b9#!RenRun48nbFQpITBtZ0J74KI5ne2ehT4' },
  'Research-talk-181206-lab_meeting': { url: 'https://filen.io/d/ec820fa4-5e0a-4f8c-8b24-4d2c05b45fd6#!ZIlJR94hpPZOZe6vSWC51SJGFt19wRys' },
  'Research-talk-170620-SINM': { url: 'https://filen.io/d/22d79292-942d-418a-b4f4-6e17fa57d19d#!NII6M2vIAAfUPkI97friOxaOY27UbB8s' },
  'Research-talk-151028-acmmm': { url: 'https://filen.io/d/94e2daed-5a82-4d37-9180-b713e2cf91de#!tCTC21qAJTrxDhAJrZlKgYAbFIP8EIMH' },
  'Research-talk-150810-urbcomp': { url: 'https://filen.io/d/29d3f6b8-2d01-4a2e-a900-7feb4674882c#!DJBX7CmX3KuGp6OAQaZxbGV4wGPpgqtd' },
  // Posters
  'Industry_poster-2016-NetSci': { url: 'assets/pdf/posters/Industry_poster-2016-NetSci.pdf' },
  'Research-poster-151028-acmmm': { url: '/assets/pdf/slides/Research-poster-151028-acmmm.pdf' },
  'Research-poster-170620-SINM': { url: 'https://filen.io/d/44b1679b-3a17-4b4e-b0cf-ddc579f1a1b7#!UuBvYaxjg7DxZZOdDB0JI19Q5DvPyWdb' },
  // Videos
  'sensoro-network': { url: 'assets/video/sensoro/network.m4v' },
  'sensoro-label': { url: 'assets/video/sensoro/label.m4v' },
  // Licenses
  'GNU GPL v3': { url: 'https://choosealicense.com/licenses/gpl-3.0/' },
  'GNU LGPL v3': { url: 'https://choosealicense.com/licenses/lgpl-3.0/' },
  'GNU AGPL v3': { url: 'https://choosealicense.com/licenses/agpl-3.0/' },
  'GNU GPL v2': { url: 'https://choosealicense.com/licenses/gpl-2.0/' },
  'BSD 3-Clause': { url: 'https://choosealicense.com/licenses/bsd-3-clause/' },
  'MIT': { url: 'https://choosealicense.com/licenses/mit/' },
  'Apache-2.0': { url: 'https://choosealicense.com/licenses/apache-2.0/' },
  // Humans
  'Tiago P. Peixoto': { url: 'https://skewed.de/tiago' },
  'Manlio De Domenico': { url: 'https://manliodedomenico.com/' },
  'Mikko Kivelä': { url: 'http://www.mkivela.com/' },
  'Benjamin F. Maier': { url: 'https://benmaier.org/' },
  'Brendan D. McKay': { url: 'https://users.cecs.anu.edu.au/~bdm/index.html' },
  'Navid Dianati': { url: 'https://scholar.google.com/citations?hl=en&user=guPKE8QAAAAJ' },
  'Martin Rosvall': { url: 'http://www.tp.umu.se/~rosvall/index.html' },
  'Ingo Scholtes': { url: 'https://www.ingoscholtes.net/' },
  'Andy Wuensche': { url: 'https://www.ddlab.org/AW.html' },
  'Daniel Larremore': { url: 'https://larremorelab.github.io/' },
  'Joshua Grochow': { url: 'https://home.cs.colorado.edu/~jgrochow/index.html' },
  'Vincent Traag': { url: 'https://www.traag.net/' },
  'Joseph Rotman': { url: 'https://math.illinois.edu/resources/department-history/faculty-memoriam/joseph-rotman' },
  'Charles Weibel': { url: 'https://sites.math.rutgers.edu/~weibel/' },
  'Emily Riehl': { url: 'https://math.jhu.edu/~eriehl/' },
  'Tom Leinster': { url: 'https://www.maths.ed.ac.uk/~tl/' },
  'Allen Hatcher': { url: 'https://pi.math.cornell.edu/~hatcher/' },
  'Avi Wigderson': { url: 'https://www.math.ias.edu/avi/' },
  'Steve Oudot': { url: 'https://geometrica.saclay.inria.fr/team/Steve.Oudot/' },
  'Roman Vershynin': { url: 'https://www.math.uci.edu/~rvershyn/' },
  'Tristan Needham': { url: 'https://www.usfca.edu/faculty/tristan-needham' },
  'Igor Carron': { url: 'https://sites.google.com/site/igorcarron2/home' },
  'Diane Poole Heller': { url: 'https://dianepooleheller.com/' },
  'Wendy Behary': { url: 'https://disarmingthenarcissist.com/about-wendy-behary/' },
  'Joel Trachtman': { url: 'https://fletcher.tufts.edu/people/faculty/joel-trachtman' },
  'Bryan Garner': { url: 'https://lawprose.org/bryan-garner/' },
  'Peter Levine': { url: 'https://www.somaticexperiencing.com/about-peter' },
  // Tools
  'Graph-tool': { url: 'https://graph-tool.skewed.de/' },
  'NetSciDraw': { url: 'https://coco.binghamton.edu/netscidraw/' },
  'Gephi': { url: 'https://gephi.org/' },
  'webweb': { url: 'https://webwebpage.github.io/' },
  'igraph': { url: 'https://igraph.org/' },
  'MuxViz': { url: 'https://muxviz.net/' },
  'Pymnet': { url: 'http://www.mkivela.com/pymnet/' },
  'NetworkX': { url: 'https://networkx.github.io/' },
  'PNet': { url: 'https://web.archive.org/web/20260111164813/http://www.melnet.org.au/pnet' },
  'statnet': { url: 'https://web.archive.org/web/20190313060846/http://statnet.csde.washington.edu:80/index.shtml' },
  'netwulf': { url: 'https://github.com/benmaier/netwulf' },
  'GrasPy': { url: 'https://graspologic-org.github.io/graspologic/' },
  'nauty': { url: 'http://pallini.di.uniroma1.it/' },
  'GraphPruning': { url: 'https://github.com/naviddianati/GraphPruning' },
  'Infomap': { url: 'https://www.mapequation.org/index.html' },
  'pathpy': { url: 'https://www.pathpy.net/' },
  'tikz-network': { url: 'https://github.com/hackl/tikz-network' },
  'DDLab': { url: 'https://www.ddlab.org/' },
  'leidenalg': { url: 'https://github.com/vtraag/leidenalg' },
  // Teaching
  '5352_s24_syllabus': { url: 'assets/pdf/teaching/5352/csci5352_s24_syllabus.pdf' },
  '5352_wk1': { url: 'assets/pdf/teaching/5352/csci5352_S24_L1b_scribbles.pdf' },
  '5352_wk2': { url: 'assets/pdf/teaching/5352/csci5352_S24_L2_scribbles.pdf' },
  '5352_wk3': { url: 'assets/pdf/teaching/5352/csci5352_S24_L3_scribbles.pdf' },
  '5352_wk4': { url: 'assets/pdf/teaching/5352/csci5352_S24_L4_scribbles.pdf' },
  '5352_wk5': { url: 'assets/pdf/teaching/5352/csci5352_S24_L5_scribbles.pdf' },
  '5352_wk6': { url: 'assets/pdf/teaching/5352/csci5352_S24_L6_scribbles.pdf' },
  '5352_wk7': { url: 'assets/pdf/teaching/5352/csci5352_S24_L7_scribbles.pdf' },
  '5352_wk8': { url: 'assets/pdf/teaching/5352/csci5352_S24_L8_scribbles.pdf' },
  '5352_wk9': { url: 'assets/pdf/teaching/5352/csci5352_S24_L9_scribbles.pdf' },
  '5352_wk10': { url: 'assets/pdf/teaching/5352/csci5352_S24_L10_scribbles.pdf' },
  '5352_wk12': { url: 'assets/pdf/teaching/5352/csci5352_S24_L11a_scribbles.pdf' },
  '5352_wk13': { url: 'assets/pdf/teaching/5352/csci5352_S24_L12_scribbles.pdf' },
  '5352_wk14': { url: 'assets/pdf/teaching/5352/csci5352_S24_L13_scribbles.pdf' },
  // Retired: each has an explanation page at /bokhi/<key>.
  'isit2021': {
    url: 'https://2021.ieee-isit.org/',
    retired: {
      reason: 'server-failure',
      about: 'the website of IEEE ISIT 2021 (Melbourne, 12–20 July 2021)',
      linkedOn: '2021-06-22',
      archive: 'https://web.archive.org/web/20210516180701/https://2021.ieee-isit.org/',
    },
  },
  'networks2021': {
    url: 'https://networks2021.net/',
    retired: {
      reason: 'domain-taken-over',
      about: 'the home page of Networks 2021, a joint Sunbelt and NetSci conference',
      linkedOn: '2021-06-02',
      archive: 'https://web.archive.org/web/20210508074557/https://networks2021.net/',
    },
  },
  'networks2021-satellites': {
    url: 'https://networks2021.net/satellites',
    retired: {
      reason: 'domain-taken-over',
      about: 'the list of satellite events of Networks 2021',
      linkedOn: '2021-06-02',
      archive: 'https://web.archive.org/web/20210512055307/https://networks2021.net/satellites',
    },
  },
  'netsci2020': {
    url: 'https://netsci2020.netscisociety.net/',
    retired: {
      reason: 'server-failure',
      about: 'the website of NetSci 2020, the Network Science Society conference (NetSci 2020 Roma)',
      linkedOn: '2020-09-25',
      archive: 'https://web.archive.org/web/20200921060115/https://netsci2020.netscisociety.net/',
    },
  },
  'what-is-a-seminar': {
    url: 'https://www.whatisaseminar.com/home',
    retired: {
      reason: 'domain-expired',
      about: 'the “What is… a seminar?” series of expository math talks for graduate students',
      linkedOn: '2021-12-06',
      archive: 'https://web.archive.org/web/20211111113918/https://www.whatisaseminar.com/home',
    },
  },
  'nasit-2022-abstract': {
    url: 'https://nasit-2022.seas.ucla.edu/wednesday-oral-symposium/entry/25/',
    retired: {
      reason: 'removed-by-owner',
      about: 'the abstract of my talk “Active learning strategies in community reconstruction” at the 2022 North American School of Information Theory',
      linkedOn: '2024-11-22',
    },
  },
  'dina-mistry-twitter': {
    url: 'https://twitter.com/dinacmistry',
    retired: {
      reason: 'account-removed',
      about: 'Dina Mistry’s Twitter profile',
      linkedOn: '2019',
      archive: 'https://web.archive.org/web/20210828004339/https://twitter.com/dinacmistry',
    },
  },
  'netsciphds-twitter': {
    url: 'https://twitter.com/NetSciPhDs',
    retired: {
      reason: 'account-removed',
      about: 'the @NetSciPhDs Twitter account',
      linkedOn: '2019',
    },
  },
  'larremore-tweet-2020': {
    url: 'https://twitter.com/DanLarremore/status/1224439980031787009',
    retired: {
      reason: 'removed-by-owner',
      about: 'Dan Larremore’s tweet about our paper “Community detection in bipartite networks with stochastic block models”',
      linkedOn: '2020-09-25',
    },
  },
  'acmmm15-slides': {
    url: 'https://d.junipertcy.info/images/c/c7/Research-talk-151028-acmmm.pptx',
    retired: {
      reason: 'file-lost',
      about: 'my slides (PowerPoint) for the ACM Multimedia 2015 talk',
      linkedOn: 'before 2020',
    },
  },
  'sinm2019': {
    url: 'https://danlarremore.com/sinm2019/',
    retired: {
      reason: 'domain-taken-over',
      about: 'the website of SINM 2019, the NetSci 2019 satellite on Statistical Inference for Network Models',
      linkedOn: '2019',
      archive: 'https://web.archive.org/web/20220119095659/https://danlarremore.com/sinm2019/',
    },
  },
} as const satisfies Record<string, LinkEntry>;

export type LinkKey = keyof typeof LINKS;

// Where a key should take the reader: its URL, or its /bokhi/ page once retired.
export function linkHref(key: LinkKey): string | undefined {
  const entry: LinkEntry | undefined = LINKS[key];
  if (!entry) {
    return undefined;
  }
  return entry.retired ? '/bokhi/' + key : entry.url;
}

// Every key that has an explanation page.
export function retiredKeys(): string[] {
  return Object.entries(LINKS as Record<string, LinkEntry>)
    .filter(([, entry]) => entry.retired)
    .map(([key]) => key);
}
