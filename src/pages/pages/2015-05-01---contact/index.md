---
title: "Contact me"
layout: page
path: "/contact"
---

<form method="post" netlify-honeypot="bot-field" data-netlify="true" action="/">
  <div>
    <label htmlFor="name">Name</label>
    <input class="contact-input" type="text" name="name" id="name" />
  </div>
  <div>
    <label htmlFor="email">Email</label>
    <input type="text" class="contact-input" name="email" id="email" />
  </div>
  <div>
    <label htmlFor="message">Message</label>
    <textarea class="contact-textarea" name="message" id="message" rows="6"></textarea>
  </div>
  <div class="actions">
    <li>
      <input class="contact-btn" type="submit" value="Send Message" className="special" />
    </li>
    <li>
      <input class="contact-btn" type="reset" value="Clear" />
    </li>
  </div>
</form>
