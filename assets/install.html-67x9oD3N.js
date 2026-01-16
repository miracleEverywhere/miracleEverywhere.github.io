import{_ as l}from"./run-sh-exec-hBAGS00M.js";import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e as p,a as n,b as i,d,w as h,r as k,o as c}from"./app-CEi3r2_h.js";const r="/assets/acc-select-ChLitnyj.png",v="/assets/install-complete-BFOgP5Ns.png",u={};function o(m,s){const a=k("RouteLink");return c(),t("div",null,[s[5]||(s[5]=p(`<div class="hint-container important"><p class="hint-container-title">重要</p><p>请在安装前再次确认系统版本，饥荒管理平台支持的系统有<strong>Ubuntu24</strong>、<strong>Rocky9</strong>、<strong>Debian13</strong>或更高版本</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>安装需root用户(sudo也不推荐)，安装前请再次确认当前用户是否为root，可输入命令<code>whoami</code>进行查看</p></div><p>复制下方代码，粘贴到终端并执行</p><div class="code-block-with-title"><div class="code-block-title-bar" data-title="点击右侧复制按钮"><span>点击右侧复制按钮</span></div><div class="language-shell line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="shell" style="--vp-collapsed-lines:10;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">run.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
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
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CONFIG_DIR=&quot;./data&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 虚拟内存大小，例如 1G 4G等</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SWAPSIZE=2G</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 日志等级，例如：debug info warn error</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">LEVEL=&quot;info&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 加速节点</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ACCELERATION_SITE=(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;gh.llkk.cc&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;github.dpik.top&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	&quot;ghfast.top&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># --------------- ↑可修改↑ --------------- #</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">###########################################</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#     下方变量请不要修改，否则可能会出现异常     #</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">###########################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">USER=$(whoami)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ExeFile=&quot;$HOME/dmp&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DMP_GITHUB_HOME_URL=&quot;https://github.com/miracleEverywhere/dst-management-platform-api&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DMP_GITHUB_API_URL=&quot;https://api.github.com/repos/miracleEverywhere/dst-management-platform-api/releases/latest&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SCRIPT_GITHUB=&quot;https://raw.githubusercontent.com/miracleEverywhere/dst-management-platform-api/master/run.sh&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DMP_HOME=&quot;https://miraclesses.top/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ACCELERATED_URL=&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cd &quot;$HOME&quot; || exit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_red() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo -e &quot;\\033[0;31m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_green() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo -e &quot;\\033[0;32m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_yellow() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo -e &quot;\\033[0;33m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_cyan() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo -e &quot;\\033[0;36m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function echo_red_blink() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo -e &quot;\\033[5;31m$*\\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查用户，只能使用root执行</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if [[ &quot;\${USER}&quot; != &quot;root&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_red &quot;请使用root用户执行此脚本&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 设置全局stderr为红色并添加固定格式</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function set_tty() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	exec 2&gt; &gt;(while read -r line; do echo_red &quot;[$(date +&#39;%F %T&#39;)] [ERROR] \${line}&quot; &gt;&amp;2; done)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 恢复stderr颜色</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function unset_tty() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	exec 2&gt;/dev/tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 定义一个函数来提示用户输入</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function prompt_user() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	clear</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;饥荒管理平台(DMP)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;--- \${DMP_GITHUB_HOME_URL} ---&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if [[ $(echo &quot;\${DMP_GITHUB_HOME_URL}&quot; | tr &#39;/&#39; &#39;\\n&#39; | grep -vc &quot;^$&quot;) != &quot;4&quot; ]] ||</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		[[ $(echo &quot;\${DMP_GITHUB_API_URL}&quot; | tr &#39;/&#39; &#39;\\n&#39; | grep -vc &quot;^$&quot;) != &quot;7&quot; ]] ||</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		[[ $(echo &quot;\${SCRIPT_GITHUB}&quot; | tr &#39;/&#39; &#39;\\n&#39; | grep -vc &quot;^$&quot;) != &quot;6&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red_blink &quot;饥荒管理平台 run.sh 脚本可能被加速站点篡改，请切换加速站点重新下载&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_cyan $DMP_HOME</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;如有疑问，请查阅帮助文档&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[0]: 下载并启动饥荒管理平台&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[1]: 启动饥荒管理平台&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[2]: 关闭饥荒管理平台&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[3]: 重启饥荒管理平台&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[4]: 更新饥荒管理平台&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[5]: 强制更新饥荒管理平台&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[6]: 更新run.sh启动脚本&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[7]: 设置虚拟内存&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[8]: 设置开机自启&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;[9]: 退出脚本&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_yellow &quot;————————————————————————————————————————————————————————————&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_yellow &quot;请输入要执行的操作 [0-9]: &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 加速节点选择</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function generate_acceleration() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	local origin_url=&quot;$1&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 输出加速节点让用户选择</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;饥荒管理平台部署在Github, 请选择一个加速节点进行加速:&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	for i in &quot;\${!ACCELERATION_SITE[@]}&quot;; do</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;$((i + 1)). \${ACCELERATION_SITE[i]}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	done</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	acc_site_len=\${#ACCELERATION_SITE[@]}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;$((acc_site_len + 1)). 不使用加速节点直接下载&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 获取用户输入</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	read -r -p &quot;请输入选择 (1-$((acc_site_len + 1))): &quot; selected_mirror</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 输入验证和处理</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	while true; do</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		# 如果输入为空，使用默认值</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if [[ -z &quot;$selected_mirror&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			selected_mirror=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		# 验证是否为数字</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if [[ ! &quot;$selected_mirror&quot; =~ ^[0-9]+$ ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo_yellow &quot;输入无效，请输入数字 (1-$((acc_site_len + 1)))&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			read -r -p &quot;请重新输入: &quot; selected_mirror</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			continue</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		# 验证范围</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if ((selected_mirror &lt; 1 || selected_mirror &gt; acc_site_len + 1)); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo_yellow &quot;选择超出范围，请输入 1 到 $((acc_site_len + 1)) 之间的数字&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			read -r -p &quot;请重新输入: &quot; selected_mirror</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			continue</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	done</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 根据选择设置URL</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if ((selected_mirror &gt;= 1 &amp;&amp; selected_mirror &lt;= acc_site_len)); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		index=$((selected_mirror - 1))</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		ACCELERATED_URL=&quot;https://\${ACCELERATION_SITE[index]}/\${origin_url}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;已选择加速节点 \${selected_mirror}: \${ACCELERATION_SITE[index]}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	elif ((selected_mirror == acc_site_len + 1)); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		ACCELERATED_URL=&quot;\${origin_url}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;已选择直接下载&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_jq() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在检查jq命令&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if ! jq --version &gt;/dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		OS=$(grep -P &quot;^ID=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if [[ \${OS} == &quot;ubuntu&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			apt install -y jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			if grep -P &quot;^ID_LIKE=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot; | grep rhel; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">				yum install -y jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_curl() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在检查curl命令&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if ! curl --version &gt;/dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		OS=$(grep -P &quot;^ID=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if [[ \${OS} == &quot;ubuntu&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			apt install -y curl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			if grep -P &quot;^ID_LIKE=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot; | grep rhel; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">				yum install -y curl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_strings() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在检查strings命令&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if ! strings --version &gt;/dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		OS=$(grep -P &quot;^ID=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if [[ \${OS} == &quot;ubuntu&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			apt install -y binutils</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			if grep -P &quot;^ID_LIKE=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot; | grep rhel; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">				yum install -y binutils</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># Ubuntu检查GLIBC, rhel需要下载文件手动安装</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_glibc() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	check_strings</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在检查GLIBC版本&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	OS=$(grep -P &quot;^ID=&quot; /etc/os-release | awk -F&#39;=&#39; &#39;{print($2)}&#39; | sed &quot;s/[&#39;\\&quot;]//g&quot;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if [[ \${OS} == &quot;ubuntu&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if ! strings /lib/x86_64-linux-gnu/libc.so.6 | grep GLIBC_2.34 &gt;/dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			apt update</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			apt install -y libc6</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;非Ubuntu系统，如GLIBC小于2.34，请手动升级&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 下载函数:下载链接,尝试次数,超时时间(s)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function download() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 显示详细进度</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	local url=&quot;$1&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	local output=&quot;$2&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	local timeout=&quot;$3&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	curl -L --connect-timeout &quot;\${timeout}&quot; --progress-bar -o &quot;\${output}&quot; &quot;\${url}&quot; 2&gt;&amp;1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	local curl_exit_code=$?</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if [ $curl_exit_code -eq 0 ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;下载完成: $output&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;下载失败 (退出码: $curl_exit_code)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	return $curl_exit_code</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 安装主程序</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function install_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	check_jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	check_curl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 获取GITHUB最新releases地址</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在获取下载信息&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if ! github_url=$(curl -s -L \${DMP_GITHUB_API_URL} | jq -r &#39;.assets[] | select(.name == &quot;dmp.tgz&quot;) | .browser_download_url&#39;); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;获取最新版本信息失败，请检查网络连接&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# sha256 digest</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在获取验证信息&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if ! github_digest=$(curl -s -L \${DMP_GITHUB_API_URL} | jq -r &#39;.assets[] | select(.name == &quot;dmp.tgz&quot;) | .digest&#39; | awk -F&#39;:&#39; &#39;{print $2}&#39;); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;获取最新版本信息失败，请检查网络连接&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	generate_acceleration &quot;\${github_url}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	url=$ACCELERATED_URL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 开始下载</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在从\${url}进行下载&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if download &quot;\${url}&quot; &quot;dmp.tgz&quot; 10; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		# 验证 SHA-256</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		file_digest=$(sha256sum dmp.tgz | awk &#39;{print $1}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if [[ &quot;$github_digest&quot; != &quot;$file_digest&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo_red &quot;DMP下载失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;DMP下载失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	set -e</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	tar zxvf dmp.tgz &gt;/dev/null</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	rm -f dmp.tgz</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	chmod +x &quot;$ExeFile&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	set +e</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查进程状态</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function check_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sleep 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if pgrep dmp &gt;/dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;启动成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;启动失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 启动主程序</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function start_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 检查端口是否被占用,如果被占用则退出</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	port=$(ss -ltnp | awk -v port=\${PORT} &#39;$4 ~ &quot;:&quot;port&quot;$&quot; {print $4}&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if [ -n &quot;$port&quot; ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;端口 $PORT 已被占用: $port&quot;, 修改 run.sh 中的 PORT 变量后重新运行</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	check_glibc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if [ -e &quot;$ExeFile&quot; ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		nohup &quot;$ExeFile&quot; -bind \${PORT} -dbpath \${CONFIG_DIR} -level \${LEVEL} &gt;/dev/null 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		install_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		nohup &quot;$ExeFile&quot; -bind \${PORT} -dbpath \${CONFIG_DIR} -level \${LEVEL} &gt;/dev/null 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 关闭主程序</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function stop_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	pkill -9 dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;关闭成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sleep 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 删除主程序、请求日志、运行日志、遗漏的压缩包</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function clear_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在执行清理&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	rm -f dmp dmp.tgz logs/*</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查当前版本号</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function get_current_version() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if [ -e &quot;$ExeFile&quot; ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		CURRENT_VERSION=$(&quot;$ExeFile&quot; -v | head -n1) # 获取输出的第一行作为版本号</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		CURRENT_VERSION=&quot;v0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 获取GitHub最新版本号</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function get_latest_version() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	check_jq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	check_curl</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	LATEST_VERSION=$(curl -s -L \${DMP_GITHUB_API_URL} | jq -r .tag_name)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if [[ -z &quot;$LATEST_VERSION&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;无法获取最新版本号，请检查网络连接或GitHub API&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 更新启动脚本</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function update_script() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	check_curl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 生成加速链接</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	generate_acceleration &quot;\${SCRIPT_GITHUB}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	url=$ACCELERATED_URL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	TEMP_FILE=&quot;/tmp/run.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_cyan &quot;正在从\${url}进行下载&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if download &quot;\${url}&quot; &quot;\${TEMP_FILE}&quot; 10; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if [ -e &quot;\${TEMP_FILE}&quot; ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo_green &quot;run.sh下载成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo_red &quot;run.sh下载失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;run.sh下载失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		exit 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 修改下载好的最新文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sed -i &quot;s/^PORT=.*/PORT=\${PORT}/&quot; $TEMP_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sed -i &quot;s/^SWAPSIZE=.*/SWAPSIZE=\${SWAPSIZE}/&quot; $TEMP_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sed -i &quot;s#^CONFIG_DIR=.*#CONFIG_DIR=\${CONFIG_DIR}#&quot; $TEMP_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sed -i &quot;s#^LEVEL=.*#LEVEL=\${LEVEL}#&quot; $TEMP_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 替换当前脚本</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	mv -f &quot;$TEMP_FILE&quot; &quot;$0&quot; &amp;&amp; chmod +x &quot;$0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;脚本更新完成，3 秒后重新启动...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sleep 3</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	exec &quot;$0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 设置虚拟内存</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function set_swap() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	SWAPFILE=/swapfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 检查是否已经存在交换文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if [ -f $SWAPFILE ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;交换文件已存在，跳过创建步骤&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_cyan &quot;创建交换文件...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		sudo fallocate -l $SWAPSIZE $SWAPFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		sudo chmod 600 $SWAPFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		sudo mkswap $SWAPFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		sudo swapon $SWAPFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;交换文件创建并启用成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 添加到 /etc/fstab 以便开机启动</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if ! grep -q &quot;$SWAPFILE&quot; /etc/fstab; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_cyan &quot;将交换文件添加到 /etc/fstab &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo &quot;$SWAPFILE none swap sw 0 0&quot; | sudo tee -a /etc/fstab</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;交换文件已添加到开机启动&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;交换文件已在 /etc/fstab 中，跳过添加步骤&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 更改swap配置并持久化</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sysctl -w vm.swappiness=20</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	sysctl -w vm.min_free_kbytes=100000</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo -e &#39;vm.swappiness = 20\\nvm.min_free_kbytes = 100000\\n&#39; &gt;/etc/sysctl.d/dmp_swap.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	echo_green &quot;系统swap设置成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">function auto_start_dmp() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	CRON_JOB=&quot;@reboot /bin/bash -c &#39;source /etc/profile &amp;&amp; cd /root &amp;&amp; echo 1 | /root/run.sh&#39;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 检查 crontab 中是否已存在该命令</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if crontab -l 2&gt;/dev/null | grep -Fq &quot;$CRON_JOB&quot;; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_yellow &quot;已发现开机自启配置，请勿重复添加&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		# 如果不存在，则添加到 crontab</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			crontab -l 2&gt;/dev/null</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo &quot;$CRON_JOB&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		) | crontab -</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;已成功设置开机自启&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 使用无限循环让用户输入命令</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">while true; do</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 提示用户输入</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	prompt_user</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 读取用户输入</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	read -r command</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	# 使用 case 语句判断输入的命令</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	case $command in</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	0)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		clear_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		install_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	1)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	2)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		stop_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	3)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		stop_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;重启成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	4)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		get_current_version</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		get_latest_version</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		if [[ &quot;$(echo -e &quot;$CURRENT_VERSION\\n$LATEST_VERSION&quot; | sort -V | head -n1)&quot; == &quot;$CURRENT_VERSION&quot; &amp;&amp; &quot;$CURRENT_VERSION&quot; != &quot;$LATEST_VERSION&quot; ]]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo_yellow &quot;当前版本 ($CURRENT_VERSION) 小于最新版本 ($LATEST_VERSION)，即将更新&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			stop_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			clear_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			install_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo_green &quot;更新完成&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">			echo_green &quot;当前版本 ($CURRENT_VERSION) 已是最新版本，无需更新&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	5)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		stop_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		clear_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		install_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		check_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_green &quot;强制更新完成&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	6)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		update_script</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	7)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_swap</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	8)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		set_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		auto_start_dmp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		unset_tty</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		break</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	9)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		exit 0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	*)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		echo_red &quot;请输入正确的数字 [0-9]&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		continue</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	esac</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">done</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/\\r$//&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./run.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></div><p>按下回车键 ⏎</p><p>如果无异常，你将会看到如下选项</p><figure><img src="`+l+'" alt="运行中的run.sh脚本" tabindex="0" loading="lazy"><figcaption>运行中的run.sh脚本</figcaption></figure><p>输入<code>0</code>安装饥荒管理平台</p><figure><img src="'+r+'" alt="选择一个加速节点" tabindex="0" loading="lazy"><figcaption>选择一个加速节点</figcaption></figure><p>这里我们输入<code>1</code>，选择1号加速节点</p><figure><img src="'+v+'" alt="安装完成" tabindex="0" loading="lazy"><figcaption>安装完成</figcaption></figure>',11)),n("p",null,[s[1]||(s[1]=i("如果看到",-1)),s[2]||(s[2]=n("strong",null,"启动成功",-1)),s[3]||(s[3]=i("字样，那就代表安装完成了，可以进入下一步",-1)),d(a,{to:"/quick-start/token.html"},{default:h(()=>[...s[0]||(s[0]=[i("令牌申请",-1)])]),_:1}),s[4]||(s[4]=i("了",-1))])])}const A=e(u,[["render",o]]),F=JSON.parse('{"path":"/quick-start/install.html","title":"部署安装","lang":"zh-CN","frontmatter":{"title":"部署安装","order":2,"icon":"download","date":"2025-12-26T00:00:00.000Z","description":"重要 请在安装前再次确认系统版本，饥荒管理平台支持的系统有Ubuntu24、Rocky9、Debian13或更高版本 警告 安装需root用户(sudo也不推荐)，安装前请再次确认当前用户是否为root，可输入命令whoami进行查看 复制下方代码，粘贴到终端并执行 点击右侧复制按钮 按下回车键 ⏎ 如果无异常，你将会看到如下选项 运行中的run.sh...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-12-26T00:00:00.000Z\\",\\"dateModified\\":\\"2026-01-06T02:02:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"miracleEverywhere\\",\\"url\\":\\"https://github.com/miracleEverywhere\\"}]}"],["meta",{"property":"og:url","content":"https://miraclesses.top/quick-start/install.html"}],["meta",{"property":"og:site_name","content":"饥荒管理平台"}],["meta",{"property":"og:title","content":"部署安装"}],["meta",{"property":"og:description","content":"重要 请在安装前再次确认系统版本，饥荒管理平台支持的系统有Ubuntu24、Rocky9、Debian13或更高版本 警告 安装需root用户(sudo也不推荐)，安装前请再次确认当前用户是否为root，可输入命令whoami进行查看 复制下方代码，粘贴到终端并执行 点击右侧复制按钮 按下回车键 ⏎ 如果无异常，你将会看到如下选项 运行中的run.sh..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-01-06T02:02:43.000Z"}],["meta",{"property":"article:published_time","content":"2025-12-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-01-06T02:02:43.000Z"}]]},"git":{"createdTime":1748426509000,"updatedTime":1767664963000,"contributors":[{"name":"miracleEverywhere","username":"miracleEverywhere","email":"763483966@qq.com","commits":20,"url":"https://github.com/miracleEverywhere"},{"name":"mhwy","username":"mhwy","email":"522247020@qq.com","commits":3,"url":"https://github.com/mhwy"}]},"readingTime":{"minutes":7.75,"words":2324},"filePathRelative":"quick-start/install.md","autoDesc":true}');export{A as comp,F as data};
