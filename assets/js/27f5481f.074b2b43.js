"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3768],{4405:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"intro/overview","title":"Advanced ROS 2 Concepts","description":"Introduction","source":"@site/docs/01_intro/01_overview.md","sourceDirName":"01_intro","slug":"/intro/overview","permalink":"/ROS2-Advanced-Concepts/docs/intro/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01_intro/01_overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"introSidebar","next":{"title":"Installing and Setting Up ROS2","permalink":"/ROS2-Advanced-Concepts/docs/intro/setup"}}');var r=i(4848),t=i(8453);const o={},c="Advanced ROS 2 Concepts",l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Course Origin",id:"course-origin",level:2},{value:"Course Objectives",id:"course-objectives",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Course Structure",id:"course-structure",level:2},{value:"Part 1: ROS 2 Actions",id:"part-1-ros-2-actions",level:3},{value:"Part 2: Lifecycle Nodes",id:"part-2-lifecycle-nodes",level:3},{value:"Part 3: Executors",id:"part-3-executors",level:3},{value:"Part 4: Components",id:"part-4-components",level:3},{value:"Hands-On Learning and Challenges",id:"hands-on-learning-and-challenges",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"advanced-ros-2-concepts",children:"Advanced ROS 2 Concepts"})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"This document outlines advanced concepts in ROS 2 for those who have mastered the basics and wish to explore more complex functionalities. This course adopts a practical, hands-on approach to facilitate learning through direct application."}),"\n",(0,r.jsx)(n.h2,{id:"course-origin",children:"Course Origin"}),"\n",(0,r.jsx)(n.p,{children:"The development of this course was driven by the need to provide clear and comprehensive information on intermediate and advanced ROS 2 concepts. These concepts were often challenging to find and understand, leading to the creation of a structured learning path designed to save time and reduce frustration."}),"\n",(0,r.jsx)(n.h2,{id:"course-objectives",children:"Course Objectives"}),"\n",(0,r.jsx)(n.p,{children:"The objective of this course is to provide a thorough understanding of intermediate and advanced ROS 2 functionalities. Mastery of these concepts will enhance capabilities as a ROS developer, enabling the application of this knowledge to various projects and frameworks, including ROS 2 Control, the Navigation Stack, and MoveIt."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"A solid understanding of ROS 2 basics is required before starting this course. Necessary skills include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creating a package"}),"\n",(0,r.jsx)(n.li,{children:"Creating a node"}),"\n",(0,r.jsx)(n.li,{children:"Creating a subscriber"}),"\n",(0,r.jsx)(n.li,{children:"Working with callbacks"}),"\n",(0,r.jsx)(n.li,{children:"Using the command line"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'For those new to ROS 2, it is recommended to complete foundational courses such as "ROS 2 for Beginners, Level One" and "Level Two." However, Level Two may be skipped if the foundational knowledge is sufficient.'}),"\n",(0,r.jsx)(n.h2,{id:"course-structure",children:"Course Structure"}),"\n",(0,r.jsx)(n.p,{children:"The course is divided into four main parts, each focusing on a crucial ROS 2 concept:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"ROS 2 Actions"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Lifecycle Nodes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Executors"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Components"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Learning is facilitated through hands-on lessons, complemented by additional challenges to practice and integrate multiple concepts."}),"\n",(0,r.jsx)(n.h3,{id:"part-1-ros-2-actions",children:"Part 1: ROS 2 Actions"}),"\n",(0,r.jsx)(n.p,{children:"ROS 2 Actions are essential for tasks requiring feedback and the ability to be preempted. Topics covered include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Structure of ROS 2 Actions"}),"\n",(0,r.jsx)(n.li,{children:"Creating and using action servers and clients"}),"\n",(0,r.jsx)(n.li,{children:"Implementing feedback and goal cancellation"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"part-2-lifecycle-nodes",children:"Part 2: Lifecycle Nodes"}),"\n",(0,r.jsx)(n.p,{children:"Lifecycle Nodes provide better control over node states. This part covers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Node lifecycle management"}),"\n",(0,r.jsx)(n.li,{children:"Transition states"}),"\n",(0,r.jsx)(n.li,{children:"Writing lifecycle-aware nodes"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"part-3-executors",children:"Part 3: Executors"}),"\n",(0,r.jsx)(n.p,{children:"Executors handle callbacks in ROS 2. This section explores:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The role of executors"}),"\n",(0,r.jsx)(n.li,{children:"Different types of executors"}),"\n",(0,r.jsx)(n.li,{children:"Customizing executors for specific use cases"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"part-4-components",children:"Part 4: Components"}),"\n",(0,r.jsx)(n.p,{children:"Components facilitate modular and reusable code. This part includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The concept of components in ROS 2"}),"\n",(0,r.jsx)(n.li,{children:"Creating and using components"}),"\n",(0,r.jsx)(n.li,{children:"Integrating components into projects"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"hands-on-learning-and-challenges",children:"Hands-On Learning and Challenges"}),"\n",(0,r.jsx)(n.p,{children:"The course emphasizes hands-on lessons to reinforce the concepts being taught. Additional challenges are provided to integrate and apply multiple concepts, aiding in the development of a comprehensive understanding of ROS 2."}),"\n",(0,r.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ROS 2 Documentation:"})," ",(0,r.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/index.html",children:"ROS 2 Documentation"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ROS 2 Tutorials:"})," ",(0,r.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Tutorials.html",children:"ROS 2 Tutorials"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Community Forums:"})," ",(0,r.jsx)(n.a,{href:"https://discourse.ros.org/",children:"ROS Discourse"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These resources can provide further guidance and support throughout the learning process."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);