---
title: {{ replace .TranslationBaseName "-" " " | title }}
subtitle: ""
type: "website"
date: {{ .Date }}
description: "{{ .Site.Author.name }}'s website"
keywords:
  - Hugo
  - website template
comment: true
---

<!-- When you set data `friends.yml` in `yourProject/data/` directory, it will be automatically loaded here. -->
---
<!-- You can define additional content below for this page. -->
## 示例信息

```yaml
- nickname: 网站名称
  avatar: https://lruihao.cn/images/avatar.jpg 网站地址
  url: geekswg.github.io
  description: 网站描述
```

## Friendly Reminder

{{< admonition info "注意" true >}}
1. If you want to exchange link, please leave a comment in the above format. (personal non-commercial blogs / websites only)
2. :(fa-solid fa-exclamation-triangle): Website failure, stop maintenance and improper content may be unlinked!
3. Those websites that do not respect other people's labor achievements, reprint without source, or malicious acts, please do not come to exchange.
{{< /admonition >}}
