<template>
  <section class="contact container-sm">
    <div class="title">
      <h1 class="title-main">Get in touch</h1>
      <h3 class="title-small">Sen doyur message tu us</h3>
    </div>
    <div class="contact-form">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="full-name" class="label">Full name</label>
          <input type="text" placeholder="Peter Sevj" id="full-name" />
        </div>
        <div class="form-group col-md-6">
          <label for="email">Email</label>
          <input type="text" placeholder="johndoe@gmail.com" id="email" />
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="phone">Phone</label>
          <input type="number" placeholder="Phone" id="phone" />
        </div>
        <div class="form-group col-md-6">
          <label for="subject">Subject</label>
          <input type="text" placeholder="Subject..." id="subject" />
        </div>
      </div>
      <div class="row col-md-12">
        <label for="message">Message</label>
        <textarea
          id="message"
          placeholder="Your message goes here.."
        ></textarea>
      </div>
      <div class="form-footer">
        <span class="required">required</span>
        <button class="send-message-button">SEND MESSAGE</button>
        <span class="right-message"
          >Viverra at port <br />accumsan. <a href="#">Orci non</a></span
        >
      </div>
    </div>
  </section>
  <Scribble />
</template>
