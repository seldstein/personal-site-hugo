---
title: 'Goodreads Export'
date: 2023-12-13T08:53:53-06:00
description:
categories:
tags:
draft: true
---

Link to repo.

Transcript of convo with GPT

The other tool I want to share is one I made. For reasons I won't expound on here, once a month I back up the data from my Goodreads, IMDb, Letterboxd, and Google Maps accounts. It's not enough of a pain for me to not do it but it is enough of a pain for me to try and make it easier. I started with Goodreads because that was the reminder that came up, and I set about trying to find if anybody had written a script that automatically downloads the csv file containing your library and moves it to the appropriate folder on your computer. To do that, you need access to the Goodreads API, which they apparently shut down sometime in the last few years. That means there's no way, as far as I know, to automatically pull data from the website. The next best option---again, as far as I can tell---is to download the csv file manually and then write a script that moves it automatically from the downloads folder to my exports folder. The problem is that I don't know any Python, so I went to ChatGPT for help. It worked like a charm. I'll go into detail in another post, but you can check out the github repo in the meantime.
