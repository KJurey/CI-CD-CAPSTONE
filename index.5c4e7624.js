let e,t,n,o,i,a,l;var r={};function d(e){return Math.floor(Math.random()*e)}function s(e,t){let n=document.createElement("canvas");n.width=500,n.height=500;let o=n.getContext("2d");o.drawImage(t,0,0,500,500);let i=o.getImageData(0,0,500,500);for(let t=0;t<i.data.length;t+=4)i.data[t]=i.data[t]*e,i.data[t+1]=i.data[t+1]*e,i.data[t+2]=i.data[t+2]*e;o.putImageData(i,0,0);let a=new Image;return a.src=n.toDataURL(),n.remove(),a}function c(e){var t;document.getElementById("moves").innerHTML=`You Moved ${e} Steps.`,t="Message-Container","visible"==document.getElementById(t).style.visibility?document.getElementById(t).style.visibility="hidden":document.getElementById(t).style.visibility="visible"}function y(e,t){let n,o,i;let a=["n","s","e","w"],l={n:{y:-1,x:0,o:"s"},s:{y:1,x:0,o:"n"},e:{y:0,x:1,o:"w"},w:{y:0,x:-1,o:"e"}};this.map=function(){return n},this.startCoord=function(){return o},this.endCoord=function(){return i},function(){n=Array(t);for(let o=0;o<t;o++){n[o]=Array(e);for(let t=0;t<e;++t)n[o][t]={n:!1,s:!1,e:!1,w:!1,visited:!1,priorPos:null}}}(),function(){switch(d(4)){case 0:o={x:0,y:0},i={x:t-1,y:e-1};break;case 1:o={x:0,y:e-1},i={x:t-1,y:0};break;case 2:o={x:t-1,y:0},i={x:0,y:e-1};break;case 3:o={x:t-1,y:e-1},i={x:0,y:0}}}(),function(){let o=!1,i=!1,s=1,c=0,y=0,u={x:0,y:0},f=e*t;for(;!o;){if(i=!1,n[u.x][u.y].visited=!0,c>=y){var g;((g=r)&&g.__esModule?g.default:g)(a),y=Math.round(d(t/8)),c=0}c++;for(let o=0;o<a.length;o++){let r=a[o],d=u.x+l[r].x,c=u.y+l[r].y;if(d>=0&&d<e&&c>=0&&c<t&&!n[d][c].visited){n[u.x][u.y][r]=!0,n[d][c][l[r].o]=!0,n[d][c].priorPos=u,u={x:d,y:c},s++,i=!0;break}}i||(u=n[u.x][u.y].priorPos),f==s&&(o=!0)}}()}function u(e,t,n,o=null){let i;let a=e.map(),l=n;function r(){for(let e=0;e<a.length;e++)for(let n=0;n<a[e].length;n++)!function(e,n,o){let i=e*l,a=n*l;!1===o.n&&(t.beginPath(),t.moveTo(i,a),t.lineTo(i+l,a),t.stroke()),!1===o.s&&(t.beginPath(),t.moveTo(i,a+l),t.lineTo(i+l,a+l),t.stroke()),!1===o.e&&(t.beginPath(),t.moveTo(i+l,a),t.lineTo(i+l,a+l),t.stroke()),!1==o.w&&(t.beginPath(),t.moveTo(i,a),t.lineTo(i,a+l),t.stroke())}(e,n,a[e][n])}t.lineWidth=l/40,this.redrawMaze=function(e){l=e,t.lineWidth=l/50,r(),i()},i=null!=o?function(){let n=l/50,i=l/25,a=e.endCoord();t.drawImage(o,2,2,o.width,o.height,a.x*l+n,a.y*l+n,l-i,l-i)}:function(){let n=e.endCoord(),o=l/4-2,i=!0;for(let e=0;e<4;e++){i=!i;for(let a=0;a<4;a++)t.beginPath(),t.rect(n.x*l+a*o+4.5,n.y*l+e*o+4.5,o,o),i?t.fillStyle="rgba(0, 0, 0, 0.8)":t.fillStyle="rgba(255, 255, 255, 0.8)",t.fill(),i=!i}},function(){let e=l*a.length;t.clearRect(0,0,e,e)}(),r(),i()}function f(e,t,n,o,i=null){let a;let l=t.getContext("2d"),r=0;a=function(t){l.beginPath(),l.fillStyle="yellow",l.arc((t.x+1)*y-u,(t.y+1)*y-u,u-2,0,2*Math.PI),l.fill(),t.x===e.endCoord().x&&t.y===e.endCoord().y&&(o(r),d.unbindKeyDown())},null!=i&&(a=g);let d=this,s=e.map(),c={x:e.startCoord().x,y:e.startCoord().y},y=n,u=y/2;function g(t){let n=y/50,a=y/25;l.drawImage(i,0,0,i.width,i.height,t.x*y+n,t.y*y+n,y-a,y-a),t.x===e.endCoord().x&&t.y===e.endCoord().y&&(o(r),d.unbindKeyDown())}function m(e){let t=y/50,n=y/25;l.clearRect(e.x*y+t,e.y*y+t,y-n,y-n)}function w(e){let t=s[c.x][c.y];switch(r++,e.keyCode){case 65:case 37:!0===t.w&&(m(c),c={x:c.x-1,y:c.y},a(c));break;case 87:case 38:!0===t.n&&(m(c),c={x:c.x,y:c.y-1},a(c));break;case 68:case 39:!0===t.e&&(m(c),c={x:c.x+1,y:c.y},a(c));break;case 83:case 40:!0===t.s&&(m(c),c={x:c.x,y:c.y+1},a(c))}}this.redrawPlayer=function(e){y=e,g(c)},this.bindKeyDown=function(){window.addEventListener("keydown",w,!1)},this.unbindKeyDown=function(){window.removeEventListener("keydown",w,!1)},a(e.startCoord()),this.bindKeyDown()}r=function(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e};const g=document.getElementById("mazeCanvas"),m=g.getContext("2d");window.onload=function(){let r=!1,d=!1,w=()=>{!0===r&&!0===d&&(console.log("Runs"),setTimeout(()=>{(function(){void 0!==i&&(i.unbindKeyDown(),i=null);let r=document.getElementById("diffSelect");l=r.options[r.selectedIndex].value,a=g.width/l,o=new u(n=new y(l,l),m,a,t),i=new f(n,g,a,c,e),document.getElementById("mazeContainer").style.opacity<"100"&&(document.getElementById("mazeContainer").style.opacity="100")})()},500))};(e=new Image).src=`https://image.ibb.co/dr1HZy/Pf_RWr3_X_Imgur.png?${new Date().getTime()}`,e.setAttribute("crossOrigin"," "),e.onload=function(){e=s(1.2,e),console.log(r=!0),w()},(t=new Image).src=`https://image.ibb.co/b9wqnJ/i_Q7m_U25_Imgur.png?${new Date().getTime()}`,t.setAttribute("crossOrigin"," "),t.onload=function(){t=s(1.1,t),console.log(d=!0),w()}},window.onresize=function(){a=g.width/l,null!=i&&(o.redrawMaze(a),i.redrawPlayer(a))};
//# sourceMappingURL=index.5c4e7624.js.map
