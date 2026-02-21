    ---
    title: "Updates"
    description: "News and notes from Fight for Manhood."
    layout: "base.njk"
    permalink: "/updates/"
    ---
    # Updates

{% set posts = collections.post | reverse %}
{% if posts.length == 0 %}
No updates yet.
{% else %}
<ul class="list">
{% for post in posts %}
  <li>
    <a href="{{ post.url }}"><strong>{{ post.data.title }}</strong></a>
    <div class="muted">{{ post.data.description or "" }}</div>
  </li>
{% endfor %}
</ul>
{% endif %}
