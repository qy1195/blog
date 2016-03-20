---
title: "Github Pages绑定域名"
date: 2015-11-12
tags: []
---

Github Pages的默认域名是github的二级域名username.github.com或者username.github.io，需要绑定自己的独立域名的话也非常简单，只要以下两步：

<!-- more -->

## 一、增加CNAME

在你的git仓库创建一个CNAME文件，内容写你的域名。比如我的域名是qy1195.com，在CNAME文件写入“qy1195.com”就好了。

## 二、域名解析

首先获取你Github Pages域名的ip，比如你的Github pages域名为qy1195.github.io，执行一下命令：

``` python
$ ping qy1195.github.io
```

你应该可以得到一个IP，比如IP是207.97.227.245。

最后去你的域名注册商后台，增加一条A记录到该IP就好了。
