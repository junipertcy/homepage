import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'str2url',
  standalone: true
})
export class Str2urlPipe implements PipeTransform {

  transform(value: string): any {

    // Remove 'and' and '&' from the value
    const cleanedValue = value.replace(/and|&/g, '');
    
    // Split the cleaned value by ', '
    const splitValues = cleanedValue.split(', ');
    if (splitValues.length > 1) {
      return null;
    }
    value = splitValues[0];

    switch (value) {
      // Talks
      case 'SSC22_video':
        return 'https://www.youtube.com/watch?v=_G65W_yBais';
      // Certificate
      case '22_OTA_cert':
        return 'https://filen.io/d/a5b01a6a-699c-4c64-b40c-f6b5a0ce9490#!tiFlwyWJsGjNk3LRq5yOeHebvujZW4N8';
      // Abstract
      case 'SSC22_absYen':
        return 'https://filen.io/d/847a79e2-5637-4d78-b39d-2241a801c37b#!QDnS0Pg01pLoDmDXO8MsPSWGJO2dEEmr';
      // Slide
      case 'Project-talk-200417-cu_boulder':
        return '/assets/pdf/slides/Project-talk-200417-cu_boulder.pdf';
      case 'Research-talk-220723-tyra':
        return 'https://filen.io/d/862e0f1a-110f-4b4b-8e6e-5ed19203b638#!6IgsokBmD3jMuardqB0LEwHIBeoyDSsz';
      case 'Research-talk-220602-ssc':
        return 'https://filen.io/d/d29c4c9a-6b50-4ec9-83f2-0cc4a2d718ac#!5B5OcPtWIt31jKK85M21NcS8I2FwSyE4';
      case 'Research-talk-220331-acp':
        console.log('If the link doesn\'t work, try this:');
        console.log('https://d.junipertcy.info/images/9/9c/Research-talk-220331-acp.pdf');
        return 'https://filen.io/d/534b0f60-c552-421f-bf65-a48f5d2187bb#!qWTFOEX8PKYzHVOP4q9OgLntrcGv43OL';
      case 'Research-talk-201107-project_tyra':
        return 'https://filen.io/d/f995961a-ed4b-4e8a-82c3-33dd1e5865b9#!RenRun48nbFQpITBtZ0J74KI5ne2ehT4';
      case 'Research-talk-181206-lab_meeting':
        return 'https://filen.io/d/ec820fa4-5e0a-4f8c-8b24-4d2c05b45fd6#!ZIlJR94hpPZOZe6vSWC51SJGFt19wRys';
      case 'Research-talk-170620-SINM':
        return 'https://filen.io/d/22d79292-942d-418a-b4f4-6e17fa57d19d#!NII6M2vIAAfUPkI97friOxaOY27UbB8s';
      case 'Research-talk-151028-acmmm':
        return 'https://filen.io/d/94e2daed-5a82-4d37-9180-b713e2cf91de#!tCTC21qAJTrxDhAJrZlKgYAbFIP8EIMH';
      case 'Research-talk-150810-urbcomp':
        return 'https://filen.io/d/29d3f6b8-2d01-4a2e-a900-7feb4674882c#!DJBX7CmX3KuGp6OAQaZxbGV4wGPpgqtd';
      // Posters
      case 'Industry_poster-2016-NetSci':
        return 'assets/pdf/posters/Industry_poster-2016-NetSci.pdf';
      case 'Research-poster-151028-acmmm':
        return '/assets/pdf/slides/Research-poster-151028-acmmm.pdf';
      case 'Research-poster-170620-SINM':
        return 'https://filen.io/d/44b1679b-3a17-4b4e-b0cf-ddc579f1a1b7#!UuBvYaxjg7DxZZOdDB0JI19Q5DvPyWdb';
      // Videos
      case 'sensoro-network':
        return 'assets/video/sensoro/network.m4v';
      case 'sensoro-label':
        return 'assets/video/sensoro/label.m4v';
      // Licenses
      case 'GNU GPL v3':
        return 'https://choosealicense.com/licenses/gpl-3.0/';
      case 'GNU LGPL v3':
        return 'https://choosealicense.com/licenses/lgpl-3.0/';
      case 'GNU AGPL v3':
        return 'https://choosealicense.com/licenses/agpl-3.0/';
      case 'GNU GPL v2':
        return 'https://choosealicense.com/licenses/gpl-2.0/';
      case 'BSD 3-Clause':
        return 'https://choosealicense.com/licenses/bsd-3-clause/';
      case 'MIT':
        return 'https://choosealicense.com/licenses/mit/';
      case 'Apache-2.0':
        return 'https://choosealicense.com/licenses/apache-2.0/';
      //  Humans
      case 'Tiago P. Peixoto':
        return 'https://skewed.de/tiago';
      case 'Manlio De Domenico':
        return 'https://comunelab.fbk.eu/manlio/index.php';
      case 'Mikko Kivelä':
        return 'http://www.mkivela.com/';
      case 'Benjamin F. Maier':
        return 'http://benmaier.org/';
      case 'Brendan D. McKay':
        return 'http://users.cecs.anu.edu.au/~bdm/index.html';
      case 'Navid Dianati':
        return 'https://scholar.google.com/citations?hl=en&user=guPKE8QAAAAJ';
      case 'Martin Rosvall':
        return 'http://www.tp.umu.se/~rosvall/index.html';
      case 'Ingo Scholtes':
        return 'https://www.ifi.uzh.ch/en/dag/people/scholtes.html';
      case 'Andy Wuensche':
        return 'http://www.ddlab.org/AW.html';
      case 'Daniel Larremore':
        return 'https://larremorelab.github.io/';
      case 'Joshua Grochow':
        return 'https://home.cs.colorado.edu/~jgrochow/index.html';
      case 'Vincent Traag':
        return 'http://www.traag.net/';
      case 'Joseph Rotman':
        return 'https://math.illinois.edu/resources/department-history/faculty-memoriam/joseph-rotman';
      case 'Charles Weibel':
        return 'https://sites.math.rutgers.edu/~weibel/';
      case 'Emily Riehl':
        return 'https://math.jhu.edu/~eriehl/';
      case 'Tom Leinster':
        return 'https://www.maths.ed.ac.uk/~tl/';
      case 'Allen Hatcher':
        return 'https://pi.math.cornell.edu/~hatcher/';
      case 'Avi Wigderson':
        return 'https://www.math.ias.edu/avi/';
      case 'Steve Oudot':
        return 'https://geometrica.saclay.inria.fr/team/Steve.Oudot/';
      case 'Roman Vershynin':
        return 'https://www.math.uci.edu/~rvershyn/';
      case 'Tristan Needham':
        return 'https://www.usfca.edu/faculty/tristan-needham';
      case 'Igor Carron':
        return 'https://sites.google.com/site/igorcarron2/home';
      case 'Diane Poole Heller':
        return 'https://dianepooleheller.com/';
      case 'Wendy Behary':
        return 'https://disarmingthenarcissist.com/about-wendy-behary/';
      case 'Joel Trachtman':
        return 'https://fletcher.tufts.edu/people/faculty/joel-trachtman';
      case 'Bryan Garner':
        return 'https://lawprose.org/bryan-garner/';
      case 'Peter Levine':
        return 'https://www.somaticexperiencing.com/about-peter';
      //  Tools
      case 'Graph-tool':
        return 'https://graph-tool.skewed.de/';
      case 'NetSciDraw':
        return 'http://coco.binghamton.edu/netscidraw/';
      case 'Gephi':
        return 'https://gephi.org/';
      case 'webweb':
        return 'http://danlarremore.com/webweb/';
      case 'igraph':
        return 'http://igraph.org/';
      case 'MuxViz':
        return 'http://muxviz.net/';
      case 'Pymnet':
        return 'http://www.mkivela.com/pymnet/';
      case 'NetworkX':
        return 'https://networkx.github.io/';
      case 'PNet':
        return 'http://www.melnet.org.au/pnet/';
      case 'statnet':
        return 'http://statnet.csde.washington.edu/index.shtml';
      case 'netwulf':
        return 'https://github.com/benmaier/netwulf';
      case 'GrasPy':
        return 'https://neurodata.io/graspy/';
      case 'nauty':
        return 'http://pallini.di.uniroma1.it/';
      case 'GraphPruning':
        return 'https://github.com/naviddianati/GraphPruning';
      case 'Infomap':
        return 'http://www.mapequation.org/index.html';
      case 'pathpy':
        return 'http://www.pathpy.net/';
      case 'tikz-network':
        return 'https://github.com/hackl/tikz-network';
      case 'DDLab':
        return 'http://www.ddlab.org/';
      case 'leidenalg':
        return 'https://github.com/vtraag/leidenalg';
      default:
        return null;
    }
  }


}
