(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{430:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorStep1.50bf607b.png"},431:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorStep1ssh.0dffbb41.png"},432:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorStep2.6445f876.png"},433:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorStep3.cbc1a6d5.png"},434:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorStep4.f508346c.png"},435:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorStep5.7241d979.png"},436:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorStep6.2a59c072.png"},437:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorStep7.03daf718.png"},438:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorDeploy1.47811ae2.png"},439:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorDeploy2.10af2275.png"},440:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorDeploy3.e7fd2183.png"},441:function(t,e,o){t.exports=o.p+"assets/img/ConfiguratorDeployManual.f79f2323.png"},734:function(t,e,o){"use strict";o.r(e);var r=o(35),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"deploy-btcpay-with-configurator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-btcpay-with-configurator"}},[t._v("#")]),t._v(" Deploy BTCPay with Configurator")]),t._v(" "),r("p",[t._v("BTCPay Server can easily be configured and deployed to a server using Configurator. This tool makes deployment simple by allowing users to initialize or modify their BTCPay setup from the Configurator.")]),t._v(" "),r("p",[t._v("Configurator can be used to modify an existing BTCPay Server, from the admin account only. Other users may visit the server's Configurator url to deploy new BTCPay instances.")]),t._v(" "),r("p",[t._v("Someone such as a BTCPay third-party host may provide a Configurator instance for their users. This can help transition users to a self-hosted solution when they are ready to stop using the third-party host's server.")]),t._v(" "),r("p",[t._v("Another use-case is for server admins who are deploying BTCPay Server's on behalf of clients or other users as part of a consulting business. Admins can easily export a Docker deployment script from Configurator selections or deploy the configuration immediately to a VPS or on-premise server using SSH.")]),t._v(" "),r("h1",{attrs:{id:"how-to-set-up-configurator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-up-configurator"}},[t._v("#")]),t._v(" How to set up Configurator")]),t._v(" "),r("h2",{attrs:{id:"option-1-add-as-an-external-service-to-btcpay"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#option-1-add-as-an-external-service-to-btcpay"}},[t._v("#")]),t._v(" Option 1: Add as an external service to BTCPay")]),t._v(" "),r("p",[t._v("If you already have an existing BTCPay Server "),r("RouterLink",{attrs:{to:"/Deployment/"}},[t._v("deployed")]),t._v(" with the "),r("code",[t._v("opt-add-configurator")]),t._v(" "),r("a",{attrs:{href:"/FAQ/FAQ-Deployment#how-can-i-modify-or-deactivate-environment-variables"}},[t._v("environment variable added")]),t._v(", view your Configurator by navigating to:")],1),t._v(" "),r("p",[r("strong",[t._v("Server Settings > Services > Other external services > Configurator > Click See information")])]),t._v(" "),r("p",[t._v("Once enabled, non-admins may also view the Configurator at: "),r("code",[t._v("yourbtcpaydomain.com/configurator")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"option-2-build-locally-with-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#option-2-build-locally-with-docker"}},[t._v("#")]),t._v(" Option 2: Build locally with Docker")]),t._v(" "),r("p",[t._v("If you have Docker installed on your machine, you can open a terminal and the run the following command to run Configurator inside of a Docker container to use on your local machine:")]),t._v(" "),r("p",[r("code",[t._v("docker run -p 1337:80 --name btcpayserver-configurator btcpayserver/btcpayserver-configurator")])]),t._v(" "),r("p",[t._v("Now you can open a browser tab and view your Configurator at "),r("strong",[t._v("localhost:1337")])]),t._v(" "),r("h1",{attrs:{id:"how-to-use-configurator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-configurator"}},[t._v("#")]),t._v(" How to use Configurator")]),t._v(" "),r("p",[t._v("Step 1: Destination")]),t._v(" "),r("p",[t._v("Select an option to deploy using SSH now or generate a bash script for later deployment.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(430),alt:"Select Deployment"}})]),t._v(" "),r("p",[t._v("To configure and deploy a server now, provide your SSH credentials where you would like it deployed to.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(431),alt:"Provide SSH Details"}})]),t._v(" "),r("p",[t._v('Note: The "Load Existing Settings" option will use the previous deployment\'s selections for faster configuration if you are modifying an existing installation.')]),t._v(" "),r("p",[t._v("Step 2: Domain")]),t._v(" "),r("p",[t._v("Provide the domain name associated with your server IP address.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(432),alt:"Provide Domain"}})]),t._v(" "),r("p",[t._v("Step 3: Chain")]),t._v(" "),r("p",[t._v("Select the desired Bitcoin network type, Bitcoin node pruning level and add any altcoins.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(433),alt:"Select Chain"}})]),t._v(" "),r("p",[t._v("Step 4: Lightning")]),t._v(" "),r("p",[t._v("Select the desired Lightning network option (optional).")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(434),alt:"Lightning Options"}})]),t._v(" "),r("p",[t._v("Step 5: Additional")]),t._v(" "),r("p",[t._v("Add any additional services to your BTCPay Server deployment (optional).")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(435),alt:"Docker Options"}})]),t._v(" "),r("p",[t._v("Step 6: Advanced")]),t._v(" "),r("p",[t._v("Provide any additional advanced settings (optional).")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(436),alt:"Advanced Settings"}})]),t._v(" "),r("p",[t._v("Step 7: Summary")]),t._v(" "),r("p",[t._v("Verify your configuration settings look correct before deploying the server.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(437),alt:"Review Settings"}})]),t._v(" "),r("p",[t._v("During Deployment:")]),t._v(" "),r("p",[t._v("Configurator will SSH into the target server and do the following actions completely automated on your behalf:")]),t._v(" "),r("ul",[r("li",[t._v("Install Docker")]),t._v(" "),r("li",[t._v("Install Docker-Compose")]),t._v(" "),r("li",[t._v("Install Git")]),t._v(" "),r("li",[t._v("Setup BTCPay settings")]),t._v(" "),r("li",[t._v("Make sure it starts at reboot via upstart or systemd")]),t._v(" "),r("li",[t._v("Add BTCPay utilities in /user/bin")]),t._v(" "),r("li",[t._v("Start BTCPay")])]),t._v(" "),r("p",[t._v("The deployment progress will be displayed in your Configurator.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(438),alt:"Wait for Deployment"}})]),t._v(" "),r("p",[t._v("Upon deployment completion, Configurator will display the domain of the newly configured BTCPay Server.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(439),alt:"Deployment Location"}})]),t._v(" "),r("p",[t._v("The list of executed commands that were used to deploy the server configuration are also displayed.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(440),alt:"Executed Commands"}})]),t._v(" "),r("h2",{attrs:{id:"export-manual-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#export-manual-configuration"}},[t._v("#")]),t._v(" Export Manual Configuration")]),t._v(" "),r("p",[t._v("If you want to deploy the configuration to your server at a later time, you can instead export a bash script of your settings. Later you can paste the configuration into your server terminal.")]),t._v(" "),r("figure",[r("img",{attrs:{src:o(441),alt:"Manual Script"}})]),t._v(" "),r("h2",{attrs:{id:"privacy-security-concerns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#privacy-security-concerns"}},[t._v("#")]),t._v(" Privacy & Security Concerns")]),t._v(" "),r("p",[t._v("If you are using someone else's Configurator to deploy your BTCPay Server, such as a "),r("RouterLink",{attrs:{to:"/ThirdPartyHosting/"}},[t._v("trusted Third-Party")]),t._v(", you will be providing them with your:")],1),t._v(" "),r("ul",[r("li",[t._v("server IP/domain and ssh password")]),t._v(" "),r("li",[t._v("server configuration settings")])]),t._v(" "),r("p",[t._v("Users are advised to change their SSH password after Configurator deployment is complete.")]),t._v(" "),r("p",[t._v("To mitigate these privacy and security concerns, use either the "),r("a",{attrs:{href:"#option-2-build-locally-with-Docker"}},[t._v("local deployment with Docker")]),t._v(" or the "),r("a",{attrs:{href:"#export-manual-configuration"}},[t._v("exported manual script")]),t._v(" without providing your domain. Be sure to include the domain when you paste the commands into your terminal.")])])}),[],!1,null,null,null);e.default=a.exports}}]);