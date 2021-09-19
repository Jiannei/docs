"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[759],{8287:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-3256ebb6",path:"/packages/laravel-schedule.html",title:"laravel-schedule",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"社区讨论文章",slug:"社区讨论文章",children:[]},{level:2,title:"功能",slug:"功能",children:[]},{level:2,title:"安装和配置",slug:"安装和配置",children:[]},{level:2,title:"使用",slug:"使用",children:[]},{level:2,title:"协议",slug:"协议",children:[]}],filePathRelative:"packages/laravel-schedule.md",git:{updatedTime:1631958135e3,contributors:[{name:"Jiannei",email:"longjian.huang@foxmail.com",commits:1}]}}},8638:(n,a,s)=>{s.r(a),s.d(a,{default:()=>T});var t=s(6252);const p=(0,t._)("h1",{id:"laravel-schedule",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#laravel-schedule","aria-hidden":"true"},"#"),(0,t.Uk)(" laravel-schedule")],-1),e=(0,t._)("blockquote",null,[(0,t._)("p",null,"⏱ More flexible way to manage your Laravel schedule tasks. - 更灵活地管理 Laravel 应用中的任务调度。")],-1),o=(0,t._)("img",{src:"https://github.styleci.io/repos/377056763/shield?style=flat&branch=main",alt:"StyleCI"},null,-1),c={href:"https://packagist.org/packages/jiannei/laravel-schedule",target:"_blank",rel:"noopener noreferrer"},l=(0,t._)("img",{src:"http://poser.pugx.org/jiannei/laravel-schedule/v",alt:"Latest Stable Version"},null,-1),u={href:"https://packagist.org/packages/jiannei/laravel-schedule",target:"_blank",rel:"noopener noreferrer"},i=(0,t._)("img",{src:"http://poser.pugx.org/jiannei/laravel-schedule/downloads",alt:"Total Downloads"},null,-1),r={href:"https://packagist.org/packages/jiannei/laravel-schedule",target:"_blank",rel:"noopener noreferrer"},k=(0,t._)("img",{src:"http://poser.pugx.org/jiannei/laravel-schedule/d/monthly",alt:"Monthly Downloads"},null,-1),d={href:"https://packagist.org/packages/jiannei/laravel-schedule",target:"_blank",rel:"noopener noreferrer"},h=(0,t._)("img",{src:"http://poser.pugx.org/jiannei/laravel-schedule/version",alt:"Version"},null,-1),m={href:"https://packagist.org/packages/jiannei/laravel-schedule",target:"_blank",rel:"noopener noreferrer"},b=(0,t._)("img",{src:"http://poser.pugx.org/jiannei/laravel-schedule/license",alt:"License"},null,-1),g=(0,t._)("h2",{id:"社区讨论文章",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#社区讨论文章","aria-hidden":"true"},"#"),(0,t.Uk)(" 社区讨论文章")],-1),_={href:"https://learnku.com/articles/45311",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("是时候使用 Lumen 8 + API Resource 开发项目了！"),f={href:"https://learnku.com/articles/45526",target:"_blank",rel:"noopener noreferrer"},L=(0,t.Uk)("教你更优雅地写 API 之「路由设计」"),w={href:"https://learnku.com/articles/52784",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("教你更优雅地写 API 之「规范响应数据」"),x={href:"https://learnku.com/articles/53015",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("教你更优雅地写 API 之「枚举使用」"),N={href:"https://learnku.com/articles/53669",target:"_blank",rel:"noopener noreferrer"},I=(0,t.Uk)("教你更优雅地写 API 之「记录日志」"),S={href:"https://learnku.com/articles/58403",target:"_blank",rel:"noopener noreferrer"},j=(0,t.Uk)("教你更优雅地写 API 之「灵活地任务调度」"),A=(0,t.uE)('<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><ul><li>通过 schedules 数据表来管理任务调度</li><li>支持开启关闭调度任务</li><li>支持通过数据表来更新任务执行间隔</li><li>支持 laravel 任务调度时的 timezone、environments、withoutOverlapping、onOneServer、runInBackground、evenInMaintenanceMode、Output（任务输出到文件、邮件）配置</li></ul><p>Tips: 使用该扩展只是多了一种可以基于数据表维护任务调度的方式，不会破坏原先 Laravel 定义任务调度的方式，两种方式甚至可以组合使用。</p><h2 id="安装和配置" tabindex="-1"><a class="header-anchor" href="#安装和配置" aria-hidden="true">#</a> 安装和配置</h2><ul><li>安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">composer</span> require jiannei/laravel-schedule -vvv\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>发布服务</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ php artisan vendor:publish --provider<span class="token operator">=</span><span class="token string">&quot;Jiannei\\Schedule\\Laravel\\Providers\\LaravelServiceProvider&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>执行迁移</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>为了能够更容易地集成到各种项目中，该扩展包并未直接提供一个 web 界面来维护 schedules 数据表，你可以按你的方式把 schedules 的配置维护进去就好。</p><p>举例说明项目中的使用方式：</p><ul><li>维护应用程序中的 schedule 调度配置到 schedules 数据表</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>schedules<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>description<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>command<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>parameters<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>expression<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>active<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>timezone<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>environments<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>without_overlapping<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>on_one_server<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>in_background<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>in_maintenance_mode<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_file_path<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_append<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_email<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_email_on_failure<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>created_at<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>updated_at<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;爬取 Github daily 趋势&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;github:trending&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;*/10 * * * *&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Asia/Shanghai&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;github_trending.log&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>schedules<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>description<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>command<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>parameters<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>expression<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>active<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>timezone<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>environments<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>without_overlapping<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>on_one_server<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>in_background<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>in_maintenance_mode<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_file_path<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_append<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_email<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_email_on_failure<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>created_at<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>updated_at<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;爬取 Github weekly 趋势&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;github:trending&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;--since=weekly&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;59 23 * * *&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Asia/Shanghai&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;github_trending.log&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">`</span>schedules<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>description<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>command<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>parameters<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>expression<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>active<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>timezone<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>environments<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>without_overlapping<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>on_one_server<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>in_background<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>in_maintenance_mode<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_file_path<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_append<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_email<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>output_email_on_failure<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>created_at<span class="token punctuation">`</span><span class="token punctuation">,</span> <span class="token punctuation">`</span>updated_at<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;爬取 Github monthly 趋势&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;github:trending&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;--since=monthly&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;59 23 * * *&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Asia/Shanghai&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;github_trending.log&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>说明：</p><ul><li>command，应用程序中已经定义并且需要自动调度的 command</li><li>parameters，对应 command 执行时指定的参数</li><li>expression，执行时间间隔，cron 表达式</li><li>active，0 开启，1 关闭</li><li>output_file_path，指定 command 的输出的文件路径</li><li>output_append，command 输出到文件时是否进行追加</li><li>output_email，command 输出发送邮件</li><li>output_email_on_failure，只在 command 执行失败时发送输出到邮件</li><li>其他参数均可以在 laravel schedule 文档中找到相应的函数说明：https://laravel.com/docs/8.x/scheduling#introduction</li></ul></blockquote><ul><li>通过<code>php artisan schedule:list</code>检验是否配置成功</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>+------------------------------------------------------------------------+--------------+--------------------------+----------------------------+\n<span class="token operator">|</span> Command                                                                <span class="token operator">|</span> Interval     <span class="token operator">|</span> Description              <span class="token operator">|</span> Next Due                   <span class="token operator">|</span>\n+------------------------------------------------------------------------+--------------+--------------------------+----------------------------+\n<span class="token operator">|</span> <span class="token string">&#39;/www/server/php/80/bin/php&#39;</span> <span class="token string">&#39;artisan&#39;</span> github:trending                 <span class="token operator">|</span> */10 * * * * <span class="token operator">|</span> 爬取 Github daily 趋势   <span class="token operator">|</span> <span class="token number">2021</span>-06-22 <span class="token number">21</span>:40:00 +08:00 <span class="token operator">|</span>\n<span class="token operator">|</span> <span class="token string">&#39;/www/server/php/80/bin/php&#39;</span> <span class="token string">&#39;artisan&#39;</span> github:trending --since<span class="token operator">=</span>weekly  <span class="token operator">|</span> <span class="token number">59</span> <span class="token number">23</span> * * *  <span class="token operator">|</span> 爬取 Github weekly 趋势  <span class="token operator">|</span> <span class="token number">2021</span>-06-22 <span class="token number">23</span>:59:00 +08:00 <span class="token operator">|</span>\n<span class="token operator">|</span> <span class="token string">&#39;/www/server/php/80/bin/php&#39;</span> <span class="token string">&#39;artisan&#39;</span> github:trending --since<span class="token operator">=</span>monthly <span class="token operator">|</span> <span class="token number">59</span> <span class="token number">23</span> * * *  <span class="token operator">|</span> 爬取 Github monthly 趋势 <span class="token operator">|</span> <span class="token number">2021</span>-06-22 <span class="token number">23</span>:59:00 +08:00 <span class="token operator">|</span>\n+------------------------------------------------------------------------+--------------+--------------------------+----------------------------+\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>重启应用程序中的 <code>php artisan schedule:run</code></li></ul><p>以上，基于 schedules 数据表来管理调度任务就完成了。</p><h2 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h2><p>MIT 许可证（MIT）。有关更多信息，请参见<a href="LICENSE">协议文件</a>。</p>',22),T={render:function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,(0,t._)("p",null,[o,(0,t._)("a",c,[l,(0,t.Wm)(s)]),(0,t._)("a",u,[i,(0,t.Wm)(s)]),(0,t._)("a",r,[k,(0,t.Wm)(s)]),(0,t._)("a",d,[h,(0,t.Wm)(s)]),(0,t._)("a",m,[b,(0,t.Wm)(s)])]),g,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",_,[v,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",f,[L,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",w,[y,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",x,[U,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",N,[I,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",S,[j,(0,t.Wm)(s)])])]),A],64)}}}}]);