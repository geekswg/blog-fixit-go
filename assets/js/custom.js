/**
 * Custom javascript for geekswg blog.
 * @author @geekswg https://geekswg.github.io
 */

const Blog = new (function () {
    /**
     * Current environment is local or not.
     * @type {Boolean}
     */
    this.isLocal = window.location.href.startsWith('http://localhost') || window.location.href.startsWith('http://127.0.0.1');
  
    /**
     * Baidu auto push.
     * @link https://ziyuan.baidu.com
     * @returns {Blog}
     */
    this.baiduPush = () => {
      var bp = document.createElement('script');
      var curProtocol = window.location.protocol.split(':')[0];
      if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
      } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
      }
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(bp, s);
      return this;
    };
    /**
     * Baidu statistics.
     * @link https://tongji.baidu.com
     * @returns {Blog}
     */
    this.baiduStatistics = () => {
      var _hmt = _hmt || [];
      var hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?b9f505844079261e3c4cbca7b4f72b2c';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
      return this;
    };
    /**
     * Console some infomation
     * @returns {Blog}
     */
    this.consoleInfo = () => {
      var myConsole = {
        log: function (s, css) {
            css = (css == undefined) ? "color:#fff7d3;background-color:#ff4f49;font-size:12px;" : css;
            console.log("%c%s", css, s);
        },
        green: function (s, css) {
            css = (css == undefined) ? "color:#fff7d3;background-color:#33a600;font-size:12px;" : css;
            console.log("%c%s", css, s);
        },
        blue: function (s, css) {
            css = (css == undefined) ? "color:#fff7d3;background-color:#00768f;font-size:12px;" : css;
            console.log("%c%s", css, s);
        },
        violet: function (s, css) {
            css = (css == undefined) ? "color:#fff7d3;background-color:#79008f;font-size:12px;padding:10px;" : css;
            console.log("%c%s", css, s);
        },
        img: function(imgUrl,width,height){
          width = (width == undefined) ? '100px':width;
          height = (height == undefined) ? '100px':height;
          console.log("%c  ", 
          "background-image:url("+imgUrl+");"+
          "line-height:"+height+";font-size:"+width+";background-size: contain;");
        }
      }

      myConsole.log('🏆 Hello World 🏆​' ,"font-size:18px;");

      myConsole.violet(
        " Talk is cheap, Show me the code. \n"+
        "                       --Linux 的创始人 Linus Torvalds "
      );
      console.log(
        '%c 毕少侠 | https://geekswg.github.io %c e-mail: mailto://geekswg@qq.com %c',
        'color: #FF0000; background: #4bffba; padding:5px 0; border-radius: 5px 5px 5px 5px;',
        'background: #fadfa3; padding:5px 0; border-radius: 5px 5px 5px 5px;',
        ''
      );
      myConsole.blue(
      '____________________________________________\n'+
      '                      /                     \n'+
      '----__----__----__---/-__---__-----------__-\n'+
      '  /   ) /___) /___) /(     (_ `| /| /  /   )\n'+
      '_(___/_(___ _(___ _/___\\__(__)_|/_|/__(___/_\n'+
      '    /                                    /  \n'+
      '(_ /                                 (_ /   \n'+
      '————————————————————————————————————————————'
      );
      myConsole.img('http://geekswg.js.cool/images/avatar.png','264px','100px');
      myConsole.log('👉 Having A Nice Day  😁​' ,"font-size:18px;");
      return this;
    };

    /**
     * Rest in Peace. R.I.P 🕯️
     * @2022-3-28 [3.21-mu5735] 沉痛哀悼 132 名遇难同胞：东航航班失事，遇难者含旅客 123 人，机组 9 人
     * @2022-12-03 江泽民同志逝世，享年96岁
     * @returns {Blog}
     */
    this.RIP = (msgOp,startTime,days) => {
      msgOp = (msgOp == undefined) ? '--- 沉痛哀悼 ---':msgOp;
      days = (days == undefined) ? 1: days;
      startTime = (startTime == undefined) ? new Date('2022/12/03 00:00:00'):startTime;
      var endTime = new Date(startTime.getTime() + (days * 24 * 60 * 60 * 1000));
      nowTime = new Date();
      console.log("开始=>"+startTime+"\n"+msgOp+"\n结束=>"+endTime);
      if (nowTime > startTime && nowTime < endTime) {
        console.log("开始=>"+startTime+"\n"+msgOp+"\n结束=>"+endTime);
        document.querySelector('html').style.filter = 'grayscale(100%)';
      }
      return this;
    };

    /**
     * 获取随机网易云评论
     * 配合 random-comment shortcode
     * @name Blog#getRandomComment
     */
    this.getRandomComment = () => {
      fetch('https://api.uomg.com/api/comments.163?mid=2414158210') //2414158210
      .then(response => response.json())
      .then((comment) => {
        document.querySelector('.pic-backdrop').style.backgroundImage = `url(${comment.data.picurl.slice(5)})`;
        const $avatar = document.querySelector('.comment-avatar');
        $avatar.alt = `${comment.data.nickname}'s avatar`;
        $avatar.src = comment.data.avatarurl.slice(5);
        $avatar.classList.remove('d-none');
        document.querySelector('.comment-nickname').innerHTML = comment.data.nickname;
        document.querySelector('.comment-content').innerHTML = comment.data.content.replace('\n','<br/>');
        document.querySelector('.music-name').innerHTML = comment.data.name;
        document.querySelector('.artists-name').innerHTML = comment.data.artistsname;
        const $player = document.createElement('meting-js');
        $player.setAttribute('auto', comment.data.url);
        $player.setAttribute('autoplay', 'true'); //自动播放
        $player.setAttribute('fixed', 'true'); // list-folded="false"
        $player.setAttribute('list-folded', 'false');
        // $player.setAttribute('mini', 'false');
        const $music = document.querySelector('.netease-music');
        $music.innerHTML = '';
        $music.appendChild($player);
      })
    };
  
    /**
     * 初始化 random-comment shortcode
     * @name Blog#initRandomComment
     * @returns {Blog}
     */
    this.initRandomComment = () => {
      if (!document.querySelector('.netease-music') || !document.querySelector('.comment-163')) {
        return;
      }
      this.getRandomComment();
      document.querySelector('.comment-163').addEventListener('click', () => {
        this.getRandomComment();
      });
      return this;
    };
  
    /**
     * Initialize.
     * @returns {Blog}
     */
    this.init = () => {
      if (!this.isLocal) {
        // SEO etc.
        this.baiduStatistics()
            .baiduPush();
      }
      // Custom infos.
      //this.RIP('测试----',new Date('2023/05/23 00:00:00'),3);
      this.consoleInfo();
      clickEffect();
      autoSetTitle();
      //this.setHomePageAvatarBackgroundImg();
      return this;
    };
  })();
  
  /**
   * Immediate.
   */
  

function customAlinkClick(){
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const website = link.href;
      alert(`You are about to visit ${website}`);
      window.location.href = website;
    });
  });
} 

//自动设置网站标题
function autoSetTitle(){
  console.log('初始化-autoSetTitle() => ' +document.title);
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      //$('[rel="icon"]').attr('href', "/failure.ico");
      //$('[rel="shortcut icon"]').attr('href', "/failure.ico");
      //document.title = '喔唷，崩溃啦！';
      document.title = ' 😂去哪里了！';
      clearTimeout(titleTime);
    } else {
      //$('[rel="icon"]').attr('href', "/favicon-32x32.ico");
      //$('[rel="shortcut icon"]').attr('href', "/favicon-32x32.ico");
      document.title = ' 😍欢迎回来！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 1000);
    }
  });
}


// =====鼠标特效
function clickEffect() {
  console.log('初始化鼠标特效-clickEffect!');
  let balls = [];
  let longPressed = false;
  let longPress;
  let multiplier = 0;
  let width,
  height;
  let origin;
  let normal;
  let ctx;
  const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
  const pointer = document.createElement("span");
  pointer.classList.add("pointer");
  document.body.appendChild(pointer);
  if (canvas.getContext && window.addEventListener) {
      ctx = canvas.getContext("2d");
      updateSize();
      window.addEventListener('resize', updateSize, false);
      loop();
      window.addEventListener("mousedown", function (e) {
          pushBalls(randBetween(10, 20), e.clientX, e.clientY);
          document.body.classList.add("is-pressed");
          longPress = setTimeout(function () {
              document.body.classList.add("is-longpress");
              longPressed = true;
          }, 500);
      }, false);
      window.addEventListener("mouseup", function (e) {
          clearInterval(longPress);
          if (longPressed == true) {
              document.body.classList.remove("is-longpress");
              pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
              longPressed = false;
          }
          document.body.classList.remove("is-pressed");
      }, false);
      window.addEventListener("mousemove", function (e) {
          let x = e.clientX;
          let y = e.clientY;
          pointer.style.top = y + "px";
          pointer.style.left = x + "px";
      }, false);
  } else {
      console.log("canvas or addEventListener is unsupported!");
  }

  function updateSize() {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(2, 2);
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
      origin = {
          x: width / 2,
          y: height / 2
      };
      normal = {
          x: width / 2,
          y: height / 2
      };
  }
  class Ball {
      constructor(x = origin.x, y = origin.y) {
          this.x = x;
          this.y = y;
          this.angle = Math.PI * 2 * Math.random();
          if (longPressed == true) {
              this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
          } else {
              this.multiplier = randBetween(6, 12);
          }
          this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
          this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
          this.r = randBetween(8, 12) + 3 * Math.random();
          this.color = colours[Math.floor(Math.random() * colours.length)];
      }
      update() {
          this.x += this.vx - normal.x;
          this.y += this.vy - normal.y;
          normal.x = -2 / window.innerWidth * Math.sin(this.angle);
          normal.y = -2 / window.innerHeight * Math.cos(this.angle);
          this.r -= 0.3;
          this.vx *= 0.9;
          this.vy *= 0.9;
      }
  }
  function pushBalls(count = 1, x = origin.x, y = origin.y) {
      for (let i = 0; i < count; i++) {
          balls.push(new Ball(x, y));
      }
  }
  function randBetween(min, max) {
      return Math.floor(Math.random() * max) + min;
  }
  function loop() {
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < balls.length; i++) {
          let b = balls[i];
          if (b.r < 0)
              continue;
          ctx.fillStyle = b.color;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
          ctx.fill();
          b.update();
      }
      if (longPressed == true) {
          multiplier += 0.2;
      } else if (!longPressed && multiplier >= 0) {
          multiplier -= 0.4;
      }
      removeBall();
      requestAnimationFrame(loop);
  }
  function removeBall() {
      for (let i = 0; i < balls.length; i++) {
          let b = balls[i];
          if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
              balls.splice(i, 1);
          }
      }
  }
}
// =====鼠标特效

/**
  * Rest in Peace. R.I.P 🕯️
  * @2022-3-28 [3.21-mu5735] 沉痛哀悼 132 名遇难同胞：东航航班失事，遇难者含旅客 123 人，机组 9 人
  * @2022-12-03 江泽民同志逝世，享年96岁
  * @returns {Blog}
  */
const RIP = new (function () {
  // 配置信息
  this.rip_configs = [
    { 
      type:'perYear' // 重复方式 once , perYear , perMonth 
      ,startTime: new Date('2022/04/05 00:00:00') // 开始时间  new Date('2022/12/03 00:00:00')
      ,duration: 24   // 持续时间 单位小时
      ,msgOp: function(){ //自定义操作，消息提醒等
        alert('清明节');
        console.log("清明节");
      },
    },
    { 
      type:'once' // 重复方式 once , perYear , perMonth 
      ,startTime: new Date('2022/12/03 00:00:00') // 开始时间  new Date('2022/12/03 00:00:00')
      ,duration: 48   // 持续时间 单位小时
      ,msgOp: function(){ //自定义操作，消息提醒等
        console.log("祭奠日");
      },
    }
  ];
  
  this.isInRIP = (rip_configs,nowTime) => {

    let result = {};
    let isRIP = false;  //是否符合条件
    nowTime = nowTime || new Date();
    
    //let type = 'once' ;// once , perYear,perMonth,
    //let startTime = null; //开始时间
    //let duration = 24; //持续时间 单位H,小时
    //let msgOp = ''; //消息提示
    
    rip_configs.forEach(function (conf, index, confs) {
      console.info('rip_configs.forEach => ' + index  );
      
      let dur = conf.duration;
      let startTime = conf.startTime;
     
      if('once' == conf.type){
        
      } else if ('perYear' == conf.type) {
        startTime.setFullYear(nowTime.getFullYear())
      }
      let endTime = new Date(startTime.getTime() + (dur * 60 * 60 * 1000));
      //console.log("开始=>"+startTime+"\n" + "\n结束=>"+endTime);
      if (nowTime > startTime && nowTime < endTime) {
        console.warn('RIP - Type : ' + conf.type);
        conf.msgOp();
        console.log("开始=>"+startTime+"\n" + "\n结束=>"+endTime);
        document.querySelector('html').style.filter = 'grayscale(100%)';
        
        RIP.isRIP = true;
        result.msgOp = conf.msgOp;
      } 
      result.isRIP = isRIP;
      result.startTime = startTime;
      result.duration = dur;
    });
    return result;
  };
})();


(() => {
  Blog.init();
  RIP.isInRIP(RIP.rip_configs,new Date());
  // It will be executed when the DOM tree is built.
  document.addEventListener('DOMContentLoaded', () => {
    //Blog.initRandomComment();
  });
  window.addEventListener('load', () => { //加载完成，这里的方法最好全部try catch 不然会影响后续其他功能的执行
    //alert('加载完成??');
    //Blog.setHomePageAvatarBackgroundImg();

    //customAlinkClick();
  });

})();