---
title: 'Building an Automatic File-Mover with ChatGPT'
date: 2023-12-13T08:53:53-06:00
description: Nothing special, but it made me happy.
categories:
  - Programming
tags:
  - ChatGPT
  - Python
draft: true
---

Once a month I back up the data from my Goodreads, IMDb, Letterboxd, and Google Maps accounts to a folder on my computer called `exports`. The process: Go to the website, find the Export button, export the data, open the terminal, move the file from `Downloads` to `exports.` It's not enough of a pain for me not to do it, but it is enough of a pain for me to try and make it easier. I figured there had to be a solution, but rather than hunt around the internet for an appropriate application I decided to build one myself.

The thing is, I don't know any Python. I barely know JavaScript. So I turned to ChatGPT for help, and short story short, it was really easy. I *love* it when things are easy. Here's the code:

I started with Goodreads because that was the reminder that came up, and I set about trying to find if anybody had written a script that automatically downloads the csv file containing your library and moves it to the appropriate folder on your computer. To do that, you need access to the Goodreads API, which they apparently shut down sometime in the last few years. That means there's no way, as far as I know, to automatically pull data from the website. The next best option--again, as far as I can tell--is to download the csv file manually and then write a script that moves it automatically from the downloads folder to my exports folder. The problem is that I don't know any Python, so I went to ChatGPT for help. It worked like a charm. I'll go into detail in another post, but you can check out the github repo in the meantime.

Transcript of convo with GPT

Link to repo.