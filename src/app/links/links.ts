// Every link the site looks up by key, through the `str2url` and `str2IntRes` pipes.
// A key used in a template must exist here: the pipes take `LinkKey`, so a misspelled
// key fails the production build instead of rendering a link to nothing.
//
// Keep this file to type-erasable syntax (no `enum`, no imports) so Node can import it
// directly for the link checks.

export interface LinkEntry {
  readonly url: string;
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
  'Manlio De Domenico': { url: 'https://comunelab.fbk.eu/manlio/index.php' },
  'Mikko Kivelä': { url: 'http://www.mkivela.com/' },
  'Benjamin F. Maier': { url: 'https://benmaier.org/' },
  'Brendan D. McKay': { url: 'https://users.cecs.anu.edu.au/~bdm/index.html' },
  'Navid Dianati': { url: 'https://scholar.google.com/citations?hl=en&user=guPKE8QAAAAJ' },
  'Martin Rosvall': { url: 'http://www.tp.umu.se/~rosvall/index.html' },
  'Ingo Scholtes': { url: 'https://www.ifi.uzh.ch/en/dag/people/scholtes.html' },
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
  'webweb': { url: 'https://danlarremore.com/webweb/' },
  'igraph': { url: 'https://igraph.org/' },
  'MuxViz': { url: 'https://muxviz.net/' },
  'Pymnet': { url: 'http://www.mkivela.com/pymnet/' },
  'NetworkX': { url: 'https://networkx.github.io/' },
  'PNet': { url: 'https://web.archive.org/web/20260111164813/http://www.melnet.org.au/pnet' },
  'statnet': { url: 'https://web.archive.org/web/20190313060846/http://statnet.csde.washington.edu:80/index.shtml' },
  'netwulf': { url: 'https://github.com/benmaier/netwulf' },
  'GrasPy': { url: 'https://neurodata.io/graspy/' },
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
} as const satisfies Record<string, LinkEntry>;

export type LinkKey = keyof typeof LINKS;
