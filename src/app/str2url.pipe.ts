import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'str2url'
})
export class Str2urlPipe implements PipeTransform {

  transform(value: string): any {
    switch (value) {
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
        return 'http://danlarremore.com/';
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
        return false;
    }
  }


}
