<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="keywords" content="杨小福,yangxiaofu,前端,编程,html,css,javascript,nodeJS">
    <meta name="description" content="杨小福的博客，记点笔记">
    <title>
        {% block title %} 杨小福|Nerver stop thinking {% endblock %}
    </title>
    <link rel="stylesheet" href="/css/public.css">
    <link rel="stylesheet" href="/css/page.css">
</head>

<body>
    <div id="headerWrapper" class="cf">
        <header id="header" class="cf">
            <div id="logo">
                <h1 class="logo">
					<a href="/">Yangxiaofu</a>
				</h1>
                <div class="logo-subtitle">
                    programmer
                </div>
            </div>
            <nav id="main-nav">
                <ul>
                    <li><a href="/">首页</a></li>
                    <li><a href="/archives">博文</a></li>
                    <li><a href="/websites/index.html">网址导航</a></li>
                    <li><a href="/about">关于</a></li>
                </ul>
            </nav>
        </header>
    </div>
    {% block content %}page content{% endblock %}
    <footer id="footer">
        <i id="upToTop"></i>
        <p>
            联系方式 <span>|</span> <a href="javascript:void(0);">yangxiaofuPL@163.com</a>
        </p>
    </footer>
</body>

</html>
