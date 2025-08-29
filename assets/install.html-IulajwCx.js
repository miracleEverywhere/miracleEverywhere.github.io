import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,e as a,o as l}from"./app-DJdaRLzv.js";const e="/assets/run-sh-0-d_01Mn1e.png",p="/assets/akams-C6PmqER4.png",t="/assets/runshproxy-DqHXHtB4.png",h="/assets/runshdownload-EAtu9Ak2.png",d="/assets/swap-D2AMwws4.png",r="/assets/latestdmp-B6scn8bR.png",c="/assets/dmpproxy-Dwwjsgn-.png",k="/assets/downloaddmp-CUMnvsET.png",u="/assets/startup-SsTL4gSG.png",v={};function o(m,s){return l(),n("div",null,s[0]||(s[0]=[a(`<div class="hint-container important"><p class="hint-container-title">重要</p><p><strong>自动安装</strong>和<strong>手动安装</strong>选择其中一种就行，可以先使用自动安装，如果出现任何下载失败的情况，再使用手动安装</p><p>两者都失败的话，可加群获取群文件，进行<strong>离线安装</strong></p></div><h2 id="自动安装" tabindex="-1"><a class="header-anchor" href="#自动安装"><span>自动安装</span></a></h2><h3 id="下载启动脚本" tabindex="-1"><a class="header-anchor" href="#下载启动脚本"><span>下载启动脚本</span></a></h3><p>打开上一节的终端页面，输入下方代码下载run.sh启动脚本</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>感谢<a href="https://akams.cn" target="_blank" rel="noopener noreferrer">akams.cn</a>社区无私奉献</p></div><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 执行以下命令，下载脚本（使用加速节点）需要使用jq命令</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://api.akams.cn/github</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jq</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;.data[0].url&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/https://raw.githubusercontent.com/miracleEverywhere/dst-management-platform-api/master/run.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./run.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><br><hr><br><div class="hint-container caution"><p class="hint-container-title">警告</p><p>如果上方命令下载成功，请进入下一小节：<strong>运行脚本</strong></p><p>如果出现下载异常，也可以手动创建 <code>run.sh</code> 脚本，将甲方代码复制粘贴到终端即可</p><p>注意！！下方命令生成的脚本可能不是最新版</p></div><div class="code-block-with-title"><div class="code-block-title-bar" data-title="手动创建run.sh"><span>手动创建run.sh</span></div><div class="language-shell line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="shell" style="--vp-collapsed-lines:10;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">run.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">###########################################</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 用户自定义设置请修改下方变量，其他变量请不要修改 #</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">###########################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># --------------- ↓可修改↓ --------------- #</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># dmp暴露端口，即网页打开时所用的端口</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PORT=80</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 数据库文件所在目录，例如：./config</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CONFIG_DIR=&quot;./&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 虚拟内存大小，例如 1G 4G等</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SWAPSIZE=2G</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># --------------- ↑可修改↑ --------------- #</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">###########################################</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#     下方变量请不要修改，否则可能会出现异常     #</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">###########################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">USER=$(whoami)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ExeFile=&quot;$HOME/dmp&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cd &quot;$HOME&quot; || exit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_red() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo -e &quot;\\033[0;31m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_green() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo -e &quot;\\033[0;32m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_yellow() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo -e &quot;\\033[0;33m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_cyan() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo -e &quot;\\033[0;36m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查用户，只能使用root执行</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if [[ &quot;\${USER}&quot; != &quot;root&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_red &quot;请使用root用户执行此脚本 (Please run this script as the root user)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 设置全局stderr为红色并添加固定格式</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function set_tty() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    exec 2&gt; &gt;(while read -r line; do echo_red &quot;[$(date +&#39;%F %T&#39;)] [ERROR] \${line}&quot; &gt;&amp;2; done)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 恢复stderr颜色</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function unset_tty() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    exec 2&gt; /dev/tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 定义一个函数来提示用户输入</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function prompt_user() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    clear</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;饥荒管理平台(DMP)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;--- https://github.com/miracleEverywhere/dst-management-platform-api ---&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[0]: 下载并启动服务(Download and start the service)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[1]: 启动服务(Start the service)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[2]: 关闭服务(Stop the service)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[3]: 重启服务(Restart the service)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[4]: 更新管理平台(Update management platform)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[5]: 强制更新平台(Force update platform)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[6]: 更新启动脚本(Update startup script)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[7]: 设置虚拟内存(Setup swap)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;[8]: 退出脚本(Exit script)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_yellow &quot;请输入选择(Please enter your selection) [0-8]: &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_jq() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_cyan &quot;正在检查jq命令(Checking jq command)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if ! jq --version &gt;/dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        OS=$(grep -P &quot;^ID=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        if [[ \${OS} == &quot;ubuntu&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            apt install -y jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            if grep -P &quot;^ID_LIKE=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot; | grep rhel; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                yum install -y jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_curl() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_cyan &quot;正在检查curl命令(Checking curl command)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if ! curl --version &gt;/dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        OS=$(grep -P &quot;^ID=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        if [[ \${OS} == &quot;ubuntu&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            apt install -y curl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            if grep -P &quot;^ID_LIKE=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot; | grep rhel; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                yum install -y curl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_strings() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_cyan &quot;正在检查strings命令(Checking strings command)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if ! strings --version &gt;/dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        OS=$(grep -P &quot;^ID=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        if [[ \${OS} == &quot;ubuntu&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            apt install -y binutils</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            if grep -P &quot;^ID_LIKE=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot; | grep rhel; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                yum install -y binutils</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># Ubuntu检查GLIBC, rhel需要下载文件手动安装</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_glibc() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    check_strings</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_cyan &quot;正在检查GLIBC版本(Checking GLIBC version)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    OS=$(grep -P &quot;^ID=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if [[ \${OS} == &quot;ubuntu&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        if ! strings /lib/x86_64-linux-gnu/libc.so.6 | grep GLIBC_2.34 &gt;/dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            apt update</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            apt install -y libc6</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_red &quot;非Ubuntu系统，如GLIBC小于2.34，请手动升级(For systems other than Ubuntu, if the GLIBC version is less than 2.34, please upgrade manually)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 下载函数:下载链接,尝试次数,超时时间(s)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function download() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    local url=&quot;$1&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    local output=&quot;$2&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    local timeout=&quot;$3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    curl -L --connect-timeout &quot;\${timeout}&quot; --progress-bar -o &quot;\${output}&quot; &quot;\${url}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    set_tty</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    return $? # 返回 wget 的退出状态</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 安装主程序</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function install_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    check_jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    check_curl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 原GitHub下载链接</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    GITHUB_URL=$(curl -s https://api.github.com/repos/miracleEverywhere/dst-management-platform-api/releases/latest | jq -r &#39;.assets[] | select(.name == &quot;dmp.tgz&quot;) | .browser_download_url&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 生成加速链接</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    url=&quot;$(curl -s https://api.akams.cn/github | jq -r &#39;.data[0].url&#39;)/\${GITHUB_URL}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if download &quot;\${url}&quot; &quot;dmp.tgz&quot; 10; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        if [ -e &quot;dmp.tgz&quot; ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo_green &quot;DMP下载成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo_red &quot;DMP下载失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_red &quot;DMP下载失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    set -e</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    tar zxvf dmp.tgz</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    rm -f dmp.tgz</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    chmod +x &quot;$ExeFile&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    set +e</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查进程状态</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sleep 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if pgrep dmp &gt;/dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_green &quot;启动成功 (Startup Success)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_red &quot;启动失败 (Startup Fail)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 启动主程序</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function start_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    check_glibc</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if [ -e &quot;$ExeFile&quot; ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        nohup &quot;$ExeFile&quot; -c -l \${PORT} -s \${CONFIG_DIR} &gt;dmp.log 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        install_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        nohup &quot;$ExeFile&quot; -c -l \${PORT} -s \${CONFIG_DIR} &gt;dmp.log 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 关闭主程序</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function stop_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    pkill -9 dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;关闭成功 (Shutdown Success)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sleep 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 删除主程序、请求日志、运行日志、遗漏的压缩包</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function clear_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_cyan &quot;正在执行清理 (Cleaning Files)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    rm -f dmp dmp.log dmpProcess.log</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查当前版本号</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function get_current_version() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if [ -e &quot;$ExeFile&quot; ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        CURRENT_VERSION=$(&quot;$ExeFile&quot; -v | head -n1) # 获取输出的第一行作为版本号</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        CURRENT_VERSION=&quot;v0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 获取GitHub最新版本号</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function get_latest_version() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    check_jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    check_curl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    LATEST_VERSION=$(curl -s https://api.github.com/repos/miracleEverywhere/dst-management-platform-api/releases/latest | jq -r .tag_name)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if [[ -z &quot;$LATEST_VERSION&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_red &quot;无法获取最新版本号，请检查网络连接或GitHub API (Failed to fetch the latest version, please check network or GitHub API)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 更新启动脚本</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function update_script() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    check_curl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_cyan &quot;正在更新脚本...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    TEMP_FILE=&quot;/tmp/run.sh&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    SCRIPT_GITHUB=&quot;https://raw.githubusercontent.com/miracleEverywhere/dst-management-platform-api/master/run.sh&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 生成加速链接</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    url=&quot;$(curl -s https://api.akams.cn/github | jq -r &#39;.data[0].url&#39;)/\${SCRIPT_GITHUB}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if download &quot;\${url}&quot; &quot;\${TEMP_FILE}&quot; 10; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        if [ -e &quot;\${TEMP_FILE}&quot; ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo_green &quot;run.sh下载成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo_red &quot;run.sh下载失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_red &quot;run.sh下载失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 修改下载好的最新文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sed -i &quot;s/^PORT=.*/PORT=\${PORT}/&quot; $TEMP_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sed -i &quot;s/^SWAPSIZE=.*/SWAPSIZE=\${SWAPSIZE}/&quot; $TEMP_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sed -i &quot;s#^CONFIG_DIR=.*#CONFIG_DIR=\${CONFIG_DIR}#&quot; $TEMP_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 替换当前脚本</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    mv -f &quot;$TEMP_FILE&quot; &quot;$0&quot; &amp;&amp; chmod +x &quot;$0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;脚本更新完成，3 秒后重新启动...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sleep 3</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    exec &quot;$0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 设置虚拟内存</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function set_swap() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    SWAPFILE=/swapfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 检查是否已经存在交换文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if [ -f $SWAPFILE ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_green &quot;交换文件已存在，跳过创建步骤&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_cyan &quot;创建交换文件...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        sudo fallocate -l $SWAPSIZE $SWAPFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        sudo chmod 600 $SWAPFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        sudo mkswap $SWAPFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        sudo swapon $SWAPFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_green &quot;交换文件创建并启用成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 添加到 /etc/fstab 以便开机启动</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if ! grep -q &quot;$SWAPFILE&quot; /etc/fstab; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_cyan &quot;将交换文件添加到 /etc/fstab &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;$SWAPFILE none swap sw 0 0&quot; | sudo tee -a /etc/fstab</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_green &quot;交换文件已添加到开机启动&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_green &quot;交换文件已在 /etc/fstab 中，跳过添加步骤&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 更改swap配置并持久化</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sysctl -w vm.swappiness=20</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sysctl -w vm.min_free_kbytes=100000</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo -e &#39;vm.swappiness = 20\\nvm.min_free_kbytes = 100000\\n&#39; &gt; /etc/sysctl.d/dmp_swap.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo_green &quot;系统swap设置成功 (System swap setting completed)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 使用无限循环让用户输入命令</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">while true; do</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 提示用户输入</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    prompt_user</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 读取用户输入</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    read -r command</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 使用 case 语句判断输入的命令</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    case $command in</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    0)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        clear_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        install_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    1)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    2)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        stop_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    3)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        stop_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_green &quot;重启成功 (Restart Success)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    4)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        get_current_version</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        get_latest_version</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        if [[ &quot;$(echo -e &quot;$CURRENT_VERSION\\n$LATEST_VERSION&quot; | sort -V | head -n1)&quot; == &quot;$CURRENT_VERSION&quot; &amp;&amp; &quot;$CURRENT_VERSION&quot; != &quot;$LATEST_VERSION&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo_yellow &quot;当前版本 ($CURRENT_VERSION) 小于最新版本 ($LATEST_VERSION)，即将更新 (Updating to the latest version)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            stop_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            clear_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            install_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo_green &quot;更新完成 (Update completed)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            echo_green &quot;当前版本 ($CURRENT_VERSION) 已是最新版本，无需更新 (No update needed)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    5)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        stop_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        clear_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        install_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_green &quot;强制更新完成 (Force update completed)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    6)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        update_script</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    7)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        set_swap</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    8)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        exit 0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    *)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo_red &quot;请输入正确的数字 [0-8](Please enter the correct number [0-8])&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        continue</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    esac</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">done</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./run.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></div><h3 id="运行脚本" tabindex="-1"><a class="header-anchor" href="#运行脚本"><span>运行脚本</span></a></h3><p>执行成功后输入0，即可完成安装</p><figure><img src="`+e+'" alt="下载并安装" tabindex="0" loading="lazy"><figcaption>下载并安装</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果出现上图中的启动成功字样，就代表已经安装成功了，可以进入下一节；<br> 如果出现网络错误，请根据下方手动安装教程进行安装</p></div><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装"><span>手动安装</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>因为饥荒管理平台源码及安装包都在Github上，如未进行Github加速可能会导致安装失败。因此，下面的教程不使用<code>run.sh</code>脚本的自动化能力，保证顺利安装。</p></div><h3 id="下载run-sh脚本" tabindex="-1"><a class="header-anchor" href="#下载run-sh脚本"><span>下载run.sh脚本</span></a></h3><p><code>run.sh</code> 脚本保存在Github上，直接下载有概率会失败，因此需要加速</p><h5 id="获取加速链接" tabindex="-1"><a class="header-anchor" href="#获取加速链接"><span>获取加速链接</span></a></h5><ol><li><p>首先打开 <a href="https://github.akams.cn" target="_blank" rel="noopener noreferrer">github.akams.cn</a> 加速站点，<strong>感谢社区无私奉献</strong></p></li><li><p>需要等待网页完全加载完毕，即网页标签页不再显示旋转的加载图标，以及下图中的红框出现网站</p></li></ol><figure><img src="'+p+'" alt="加速站点" tabindex="0" loading="lazy"><figcaption>加速站点</figcaption></figure><ol start="3"><li><code>https://raw.githubusercontent.com/miracleEverywhere/dst-management-platform-api/master/run.sh</code> 将下方网址复制到加速站点的输入框中</li></ol><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>https://raw.githubusercontent.com/miracleEverywhere/dst-management-platform-api/master/run.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>选择 Wget &amp; Curl 后，点击第一个复制</li></ol><figure><img src="'+t+'" alt="run.sh加速" tabindex="0" loading="lazy"><figcaption>run.sh加速</figcaption></figure><h5 id="开始下载" tabindex="-1"><a class="header-anchor" href="#开始下载"><span>开始下载</span></a></h5><ol><li><p>将复制的命令输入上一节打开的终端中，并按回车键执行</p></li><li><p>并为下载好的<code>run.sh</code>添加执行权限：<code>chmod +x run.sh</code></p></li></ol><figure><img src="'+h+'" alt="run.sh下载" tabindex="0" loading="lazy"><figcaption>run.sh下载</figcaption></figure><h5 id="开启swap" tabindex="-1"><a class="header-anchor" href="#开启swap"><span>开启SWAP</span></a></h5><div class="hint-container tip"><p class="hint-container-title">提示</p><p>饥荒专用服务器比较吃内存，所以需要开启SWAP(虚拟内存)，以避免服务器卡死。</p></div><ol><li><p>输入 <code>./run.sh</code> 运行脚本</p></li><li><p>输入 <code>7</code> 即可</p></li></ol><figure><img src="'+d+'" alt="设置SWAP" tabindex="0" loading="lazy"><figcaption>设置SWAP</figcaption></figure><h3 id="部署饥荒管理平台" tabindex="-1"><a class="header-anchor" href="#部署饥荒管理平台"><span>部署饥荒管理平台</span></a></h3><h5 id="获取最新版本" tabindex="-1"><a class="header-anchor" href="#获取最新版本"><span>获取最新版本</span></a></h5><ol><li><p>在浏览器中打开这个页面：<a href="https://api.github.com/repos/miracleEverywhere/dst-management-platform-api/releases/latest" target="_blank" rel="noopener noreferrer">获取饥荒管理平台最新版本</a></p></li><li><p>打开后输入 ctrl+f(MacOS为 command+f) 打开页面搜索，输入<code>browser_download_url</code></p></li></ol><figure><img src="'+r+'" alt="获取最新版本" tabindex="0" loading="lazy"><figcaption>获取最新版本</figcaption></figure><h5 id="获取加速链接-1" tabindex="-1"><a class="header-anchor" href="#获取加速链接-1"><span>获取加速链接</span></a></h5><ol><li><p>会出先两个结果，我们找到以 <code>dmp.tgz</code> 结尾的那个链接，复制下来</p></li><li><p>回到加速站点，将复制的链接粘贴进输入框，并点击第一个复制</p></li></ol><figure><img src="'+c+'" alt="获取加速链接" tabindex="0" loading="lazy"><figcaption>获取加速链接</figcaption></figure><h5 id="下载并启动" tabindex="-1"><a class="header-anchor" href="#下载并启动"><span>下载并启动</span></a></h5><ol><li>将复制好的命令粘贴到终端，按回车键运行</li></ol><figure><img src="'+k+'" alt="执行下载" tabindex="0" loading="lazy"><figcaption>执行下载</figcaption></figure><ol start="2"><li>输入命令解压下载好的压缩包：<code>tar zxvf dmp.tgz</code>，解压完成后输入：<code>./run.sh</code> 并输入：<code>1</code> 启动饥荒管理平台</li></ol><figure><img src="'+u+'" alt="解压并启动" tabindex="0" loading="lazy"><figcaption>解压并启动</figcaption></figure><p>到目前为止，饥荒管理平台就算部署成功，下一节我们将进行令牌申请</p>',46)]))}const y=i(v,[["render",o]]),F=JSON.parse('{"path":"/quick-start/install.html","title":"部署安装","lang":"zh-CN","frontmatter":{"title":"部署安装","order":2,"icon":"download","date":"2025-05-28T00:00:00.000Z","description":"重要 自动安装和手动安装选择其中一种就行，可以先使用自动安装，如果出现任何下载失败的情况，再使用手动安装 两者都失败的话，可加群获取群文件，进行离线安装 自动安装 下载启动脚本 打开上一节的终端页面，输入下方代码下载run.sh启动脚本 提示 感谢akams.cn社区无私奉献 警告 如果上方命令下载成功，请进入下一小节：运行脚本 如果出现下载异常，也可...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-05-28T00:00:00.000Z\\",\\"dateModified\\":\\"2025-08-29T02:54:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"miracleEverywhere\\",\\"url\\":\\"https://github.com/miracleEverywhere\\"}]}"],["meta",{"property":"og:url","content":"https://miraclesses.top/quick-start/install.html"}],["meta",{"property":"og:site_name","content":"饥荒管理平台"}],["meta",{"property":"og:title","content":"部署安装"}],["meta",{"property":"og:description","content":"重要 自动安装和手动安装选择其中一种就行，可以先使用自动安装，如果出现任何下载失败的情况，再使用手动安装 两者都失败的话，可加群获取群文件，进行离线安装 自动安装 下载启动脚本 打开上一节的终端页面，输入下方代码下载run.sh启动脚本 提示 感谢akams.cn社区无私奉献 警告 如果上方命令下载成功，请进入下一小节：运行脚本 如果出现下载异常，也可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-08-29T02:54:48.000Z"}],["meta",{"property":"article:published_time","content":"2025-05-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-08-29T02:54:48.000Z"}]]},"git":{"createdTime":1748426509000,"updatedTime":1756436088000,"contributors":[{"name":"miracleEverywhere","username":"miracleEverywhere","email":"763483966@qq.com","commits":14,"url":"https://github.com/miracleEverywhere"}]},"readingTime":{"minutes":8.19,"words":2457},"filePathRelative":"quick-start/install.md","autoDesc":true}');export{y as comp,F as data};
