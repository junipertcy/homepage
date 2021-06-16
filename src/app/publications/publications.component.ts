import {Component, OnInit} from '@angular/core';
import {Article, ArXiv} from './paper';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})


export class PublicationsComponent implements OnInit {
  urbcomp2015 = false;
  // Preprints
  p1 = new ArXiv('2106.00185');
  preprints = [this.p1];

  // Journal Articles
  j4 = new Article('10.1103/PhysRevE.102.032309', '2001.11818');
  j3 = new Article('10.1038/srep20542');
  j2 = new Article('10.1002/anie.201510885');
  j1 = new Article('10.1021/jz4011477', '1307.5590');
  articles = [this.j4, this.j3, this.j2, this.j1];

  // Conference Proceedings
  c1 = new Article('10.1016/j.proche.2011.08.028');
  c2 = new Article('10.1145/2733373.2809931');
  proceedings = [this.c2, this.c1];

  // Other Articles
  o1 = new Article();
  other_articles = [this.o1];

  // Translations
  t1 = new Article();
  t2 = new Article();
  translations = [this.t2, this.t1];

  constructor() {
    this.p1.title = 'Construction of Simplicial Complexes with Prescribed Degree-Size Sequences';
    this.p1.authors = 'Tzu-Chi Yen';
    this.p1.arXiv_cat = '[cs.SI]';
    this.p1.preprint_pdf = 'https://d.junipertcy.info/images/0/03/2106.00185.pdf';
    this.p1.code = 'https://github.com/junipertcy/simplicial-test';
    this.p1.docs = 'https://docs.netscied.tw/simplicial-test/index.html';
    this.p1.summary = 'Simpliciality testing, an in general NP-complete problem, asks whether a given pair of integer sequences can realize a simplicial complex. In this Letter we make essential steps towards solving this problem, demonstrating that on most instances simpliciality can be decided in polynomial time. Coupling our algorithmic output to existing techniques, we can efficiently sample simplicial ensembles from arbitrary node degree and facet size distributions. This opens an avenue for the quantitative study of higher-order network phenomena in terms of local structural attributes.';
    this.p1.favorite = true;

    this.j4.title = 'Community detection in bipartite networks with stochastic block models';
    this.j4.authors = 'Tzu-Chi Yen and Daniel B. Larremore';
    this.j4.venue = 'Phys. Rev. E 102, 032309 (2020)<br>';
    this.j4.arXiv_cat = '[physics.soc-ph]';
    this.j4.code = 'https://github.com/junipertcy/bipartiteSBM';
    this.j4.paper_pdf = 'https://d.junipertcy.info/images/b/be/Research-paper-2020-PRE.pdf';
    this.j4.docs = 'https://docs.netscied.tw/bipartiteSBM/index.html';
    this.j4.tweets = 'https://twitter.com/DanLarremore/status/1224439980031787009';
    this.j4.summary = 'We solve the community detection problem for bipartite networks using a nonparametric Bayesian stochastic blockmodel which is specifically customized for bipartite networks.';
    this.j4.favorite = true;

    this.j3.title = 'Nanoscopic substructures of raft-mimetic liquid-ordered membrane domains revealed by high-speed single-particle tracking';
    this.j3.authors = 'Hsiao-Mei Wu, Ying-Hsiu Lin, Tzu-Chi Yen, and Chia-Lung Hsieh';
    this.j3.venue = 'Sci. Rep. 6, 20542 (2016)<br>';
    this.j3.paper_pdf = 'https://d.junipertcy.info/images/6/64/Research-paper-2016-ScientificReports.pdf';
    this.j3.summary = 'We use high-speed interferometric scattering (iSCAT) optical microscopy and small gold nanoparticles as labels, recording the motions of single lipids via single-particle tracking (SPT), which provides the first experimental evidence of non-uniform molecular organization of the lipid phase, giving a new view of how rafts recruit and confine molecules in cell membranes.';

    this.j2.title = 'A Rhizavidin Monomer with Nearly Multimeric Avidin-Like Binding Stability Against Biotin Conjugates';
    this.j2.authors = 'Jeong Min Lee, Jung A Kim, Tzu-Chi Yen, In Hwan Lee, Byungjun Ahn, Younghoon Lee, Chia-Lung Hsieh, Ho Min Kim, and Yongwon Jung';
    this.j2.venue = 'Angewandte Chemie 128, 3454 (2016)<br>';
    this.j2.paper_pdf = 'https://d.junipertcy.info/images/0/05/Research-paper-2016-AngewandteChemie.pdf';
    this.j2.summary = 'We provide experimental chracterization for a monomeric avidin-like protein, with off-rates almost comparable to those of multimeric avidin proteins against various biotin conjugates.';

    this.j1.title = 'Clustered Geometries Exploiting Quantum Coherence Effects for Efficient Energy Transfer in Light Harvesting';
    this.j1.authors = 'Qing Ai, Tzu-Chi Yen, Bih-Yaw Jin, and Yuan-Chung Cheng';
    this.j1.venue = 'J. Phys. Chem. Lett. 4, 2577, (2013)<br>';
    this.j1.paper_pdf = 'https://d.junipertcy.info/images/b/bc/Research-paper-2013-JPCL.pdf';
    this.j1.arXiv_cat = '[physics.bio-ph]';
    this.j1.summary = 'We study energy transfer in a linear light-harvesting model to reveal that dimerized geometries with strong electronic coherences within donor and acceptor pairs exhibit significantly improved efficiency, which is in marked contrast to predictions of the classical Förster theory.';
    this.j1.favorite = true;

    this.c2.title = 'What Makes New York So Noisy? Reasoning Noise Pollution by Mining Multimodal Geo-Social Big Data';
    this.c2.authors = 'Hsun-Ping Hsieh, Tzu-Chi Yen, and Cheng-Te Li';
    this.c2.venue = '<i>ACM International Conference on Multimedia</i>, Brisbane, Australia, Oct. 2015.<br>';
    this.c2.highlight = 'IBM Grand Challenge (<a href="http://d.junipertcy.info/images/a/ae/ACMMM15-Grand_Challenge-Proposal.pdf" download="ACMMM15-Grand_Challenge-Proposal.pdf">New York City 360 ̊ </a>) finalist.<br>';
    this.c2.code = 'https://github.com/junipertcy/uwalk';
    this.c2.slides = 'https://d.junipertcy.info/images/c/c7/Research-talk-151028-acmmm.pptx';
    this.c2.paper_pdf = 'https://d.junipertcy.info/images/7/78/Research-paper-2015-acmmm.pdf';
    this.c2.summary = 'Using NYC 311 noise complaint records as the approximation of noise pollution for validation, we develop a joint inference and visualization system that integrates multimodal features, including geographical, mobility, visual, and social, with a graph-based learning model to infer the noise compositions of regions.';

    this.c1.title = 'Electronic Coherence Effects in Photosynthetic Light Harvesting';
    this.c1.authors = 'Tzu-Chi Yen and Yuan-Chung Cheng';
    this.c1.venue = 'The 22<sup>nd</sup> Solvay Conference on Chemistry at Brussels, <i>Procedia Chemistry</i>, <b>3</b> (1), 2011, Pages 211-221.<br>';
    this.c1.highlight = 'The Solvay Conference is famous for its <a href="https://en.wikipedia.org/wiki/Solvay_Conference">fifth one</a> in October 1927 on Electrons and Photons.<br>';
    this.c1.paper_pdf = 'https://d.junipertcy.info/images/4/4a/Research-paper-2011-ProcediaChemistry.pdf';
    this.c1.summary = 'We review studies on quantum coherence effects in the LH2 antenna complex from purple bacteria to demonstrate how quantum mechanical rules play important roles in the speedup of excitation energy transfer, the stabilization of electronic excitations, and the robustness of light harvesting in photosynthesis.';

    this.o1.title = 'An Interactive Visualization System to Analyze and Predict Urban Construction Dynamics';
    this.o1.authors = 'Tzu-Chi Yen, Tzu-Yun Lin, Ching-Yuan Yeh, Hsun-Ping Hsieh, and Cheng-Te Li';
    this.o1.venue = '<i>ACM SIGKDD International Workshop on Urban Computing</i>, Sydney, Australia, Aug. 2015.<br>';
    this.o1.paper_pdf = 'https://d.junipertcy.info/images/a/a5/Research-paper-2015-urbcomp.pdf';
    this.o1.slides = 'http://d.junipertcy.info/images/d/d1/Research-talk-150810-urbcomp.pdf';
    this.o1.code = 'https://github.com/junipertcy/uConstruction';
    this.o1.highlight = '';
    this.o1.favorite = true;
    this.o1.summary = 'We develop an analytic and visualization system for citizens and government agencies to understand, track, and predict the construction dynamics in an urban area.';

    this.t2.title = 'Complexity Explained';
    this.t2.authors = 'Chia-Hung Yang and Tzu-Chi Yen';
    this.t2.highlight = 'We provide the translation in Traditional Chinese (Mandarin) to support the <a href="https://complexityexplained.github.io/">#ComplexityExplained</a> project.<br>';
    this.t2.paper_pdf = 'https://complexityexplained.github.io/ComplexityExplained[Chinese].pdf';

    this.t1.title = 'Network Literacy: Essential Concepts and Core Ideas';
    this.t1.authors = 'Tzu-Chi Yen and Cheng-Te Li';
    this.t1.highlight = 'We provide the translation in Traditional Chinese (Mandarin) as a joint work with the <a href="https://netscied.tw/">Network Science Education (NetSciEd) in Taiwan</a> project.<br>';
    this.t1.paper_pdf = 'http://d.junipertcy.info/images/c/ce/Network_Literacy_tw_Mandarin.pdf';
    this.t1.links = [{
      'title': 'NetSci2016 참가기',
      'url': 'http://d.junipertcy.info/images/f/fb/NetSci2016_notes_korean.pdf'
    }, ];
  }

  ngOnInit() {
  }
}
