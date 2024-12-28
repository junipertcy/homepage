import { Component, OnInit } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Article, ArXiv } from './paper';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [NzTagModule, CommonModule, NzIconModule],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css',]
})

export class PublicationsComponent implements OnInit {
  // Preprints
  // p1 = new ArXiv('2106.00185');
  preprints: any[] = [];

  // Journal Articles
  j5 = new Article('10.1103/PhysRevE.104.L042303', '2106.00185');
  j4 = new Article('10.1103/PhysRevE.102.032309', '2001.11818');
  j3 = new Article('10.1038/srep20542');
  j2 = new Article('10.1002/anie.201510885');
  j1 = new Article('10.1021/jz4011477', '1307.5590');
  articles = [this.j5, this.j4, this.j3, this.j2, this.j1];

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
    this.j5.title = 'Construction of simplicial complexes with prescribed degree-size sequences';
    this.j5.authors = 'Tzu-Chi Yen';
    this.j5.venue = 'Phys. Rev. E 104, L042303 (2021)<br>';
    this.j5.arXiv_cat = '[cs.SI]';
    this.j5.paper_pdf = 'https://filen.io/d/db15f35a-a9bb-4de1-ba46-29fd861cfa39#!yZrzJX7KY6Qipyj0DPq0gXKCm5QK1pEZ';
    this.j5.sm_pdf = 'https://filen.io/d/481c3615-b57b-46b8-a468-47775de5d689#!bHmrGxMiEoSXcSP6UsL4DmG9bVnyGJ6Q';
    this.j5.code = 'https://github.com/junipertcy/simplicial-test';
    this.j5.docs = 'https://docs.netscied.tw/simplicial-test/index.html';
    this.j5.summary = 'We examine which degree-size sequences can realize a simplicial complex (an analog of network with nonpairwise couplings). Using a recursive algorithm, we present evidence that on most inputs this problem can be decided in polynomial time. This paves the way toward understanding higher-order phenomena in terms of local structural attributes.';
    this.j5.favorite = true;

    this.j4.title = 'Community detection in bipartite networks with stochastic block models';
    this.j4.authors = 'Tzu-Chi Yen and Daniel B. Larremore';
    this.j4.venue = 'Phys. Rev. E 102, 032309 (2020)<br>';
    this.j4.arXiv_cat = '[physics.soc-ph]';
    this.j4.code = 'https://github.com/junipertcy/bipartiteSBM';
    this.j4.paper_pdf = 'https://filen.io/d/6a055166-f5c7-4e23-a2b0-0019625ffee7#!9cDhMbprAab4UPMc0kFA3ET0xGIdSFqs';
    this.j4.docs = 'https://docs.netscied.tw/bipartiteSBM/index.html';
    this.j4.tweets = 'https://twitter.com/DanLarremore/status/1224439980031787009';
    this.j4.summary = 'We solve the community detection problem for bipartite networks using a nonparametric Bayesian stochastic blockmodel which is specifically customized for bipartite networks.';
    this.j4.favorite = true;

    this.j3.title = 'Nanoscopic substructures of raft-mimetic liquid-ordered membrane domains revealed by high-speed single-particle tracking';
    this.j3.authors = 'Hsiao-Mei Wu, Ying-Hsiu Lin, Tzu-Chi Yen, and Chia-Lung Hsieh';
    this.j3.venue = 'Sci. Rep. 6, 20542 (2016)<br>';
    this.j3.paper_pdf = 'https://filen.io/d/f79b452d-6a34-49d6-af1f-25e51866f215#!uPh7r3hHp1axmHiZDsWVGSOmlCzv6xhM';
    this.j3.summary = 'We use high-speed interferometric scattering (iSCAT) optical microscopy and small gold nanoparticles as labels, recording the motions of single lipids via single-particle tracking (SPT), which provides the first experimental evidence of non-uniform molecular organization of the lipid phase, giving a new view of how rafts recruit and confine molecules in cell membranes.';

    this.j2.title = 'A rhizavidin monomer with nearly multimeric avidin-Like binding stability against biotin conjugates';
    this.j2.authors = 'Jeong Min Lee, Jung A Kim, Tzu-Chi Yen, In Hwan Lee, Byungjun Ahn, Younghoon Lee, Chia-Lung Hsieh, Ho Min Kim, and Yongwon Jung';
    this.j2.venue = 'Angewandte Chemie 55, 3393 (2016)<br>';
    this.j2.paper_pdf = 'https://filen.io/d/80b83364-a0bc-40db-961a-f776124d1e69#!zA65yRCB0yvdRYzozf2jf6o82bpma91J';
    this.j2.summary = 'We provide experimental chracterization for a monomeric avidin-like protein, with off-rates almost comparable to those of multimeric avidin proteins against various biotin conjugates.';

    this.j1.title = 'Clustered geometries exploiting quantum coherence effects for efficient energy transfer in light harvesting';
    this.j1.authors = 'Qing Ai, Tzu-Chi Yen, Bih-Yaw Jin, and Yuan-Chung Cheng';
    this.j1.venue = 'J. Phys. Chem. Lett. 4, 2577, (2013)<br>';
    this.j1.paper_pdf = 'https://filen.io/d/e5ab8ee5-da69-491e-9ee6-1f8aa8a73555#!kr3Kyd7z8kVruMhPwPEdOR9BQjM0Y9Qa';
    this.j1.arXiv_cat = '[physics.bio-ph]';
    this.j1.summary = 'We study energy transfer in a linear light-harvesting model to reveal that dimerized geometries with strong electronic coherences within donor and acceptor pairs exhibit significantly improved efficiency, which is in marked contrast to predictions of the classical Förster theory.';
    this.j1.favorite = true;

    this.c2.title = 'What Makes New York So Noisy? Reasoning Noise Pollution by Mining Multimodal Geo-Social Big Data';
    this.c2.authors = 'Hsun-Ping Hsieh, Tzu-Chi Yen, and Cheng-Te Li';
    this.c2.venue = '<i>ACM International Conference on Multimedia</i>, Brisbane, Australia, Oct. 2015.<br>';
    this.c2.highlight = 'IBM Grand Challenge (<a href="http://d.junipertcy.info/images/a/ae/ACMMM15-Grand_Challenge-Proposal.pdf" download="ACMMM15-Grand_Challenge-Proposal.pdf">New York City 360 ̊ </a>) finalist.<br>';
    this.c2.code = 'https://github.com/junipertcy/uwalk';
    this.c2.slides = 'https://d.junipertcy.info/images/c/c7/Research-talk-151028-acmmm.pptx';
    this.c2.paper_pdf = 'https://filen.io/d/07a4be0f-6e04-4428-a6c5-9cf2466bfdff#!3MQrl67WJ18DaoVopowo6oUuhzyqbqzV';
    this.c2.summary = 'Using NYC 311 noise complaint records as the approximation of noise pollution for validation, we develop a joint inference and visualization system that integrates multimodal features, including geographical, mobility, visual, and social, with a graph-based learning model to infer the noise compositions of regions.';

    this.c1.title = 'Electronic Coherence Effects in Photosynthetic Light Harvesting';
    this.c1.authors = 'Tzu-Chi Yen and Yuan-Chung Cheng';
    this.c1.venue = 'The 22<sup>nd</sup> Solvay Conference on Chemistry at Brussels, <i>Procedia Chemistry</i>, <b>3</b> (1), 2011, Pages 211-221.<br>';
    this.c1.highlight = 'The Solvay Conference is famous for its <a href="https://en.wikipedia.org/wiki/Solvay_Conference">fifth one</a> in October 1927 on Electrons and Photons.<br>';
    this.c1.paper_pdf = 'https://filen.io/d/55a2b499-52e2-4504-9db7-83a6a1243c3f#!X3GYPCEk5ak0mXrABmatJRnp7WLwOuCA';
    this.c1.summary = 'We review studies on quantum coherence effects in the LH2 antenna complex from purple bacteria to demonstrate how quantum mechanical rules play important roles in the speedup of excitation energy transfer, the stabilization of electronic excitations, and the robustness of light harvesting in photosynthesis.';

    this.o1.title = 'An Interactive Visualization System to Analyze and Predict Urban Construction Dynamics';
    this.o1.authors = 'Tzu-Chi Yen, Tzu-Yun Lin, Ching-Yuan Yeh, Hsun-Ping Hsieh, and Cheng-Te Li';
    this.o1.venue = '<i>ACM SIGKDD International Workshop on Urban Computing</i>, Sydney, Australia, Aug. 2015.<br>';
    this.o1.paper_pdf = 'https://filen.io/d/fc0bf12d-6744-4c0d-998a-0c67d309a1c9#!Azd5YRDAL1CsD9DW1rdJ9O4Yz80fgrCb';
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
    this.t1.paper_pdf = 'https://filen.io/d/b397cfc7-414d-44f8-9e3d-d7f8949a0239#!7gpBEN1GHpsTVLIv74XXD6Sg2owImKA6';
    this.t1.links = [{
      'title': 'NetSci2016 참가기',
      'url': 'https://filen.io/d/1bdb5c6c-cc3b-4714-9159-87f5862ec5b8#!yUjGPTzCvDYL1tvpCocpykds5uzRHfnQ'
    },];
  }

  ngOnInit() {
  }
}
