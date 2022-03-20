# lytfta-challenge

## Summary

A basic video player made in HTML, CSS and JS for Lyfta's take-home challenge.

## User Stories

- I want to be able to see a list of available videos with thumbnail and basic information
- I want to be able to choose a video from a list
- I want to be able to play and pause the video
- I want to be able to move to different points of the video
- I want to be able to turn subtitles on and off
- I want to be able to toggle whether the video takes up all of the screen
- I want to be able to choose playback speed
- I want to be able to choose the video quality
- I want to be able to change the volume
- I want to be able to complain about a problem with the video
- I want to be able to navigate the video using keyboard controls
- I am a visually impaired user and want an alternative way of accessing the information in the video

## Project

I realised that HTML5 and iframe brought a good amount of inbuilt control into the videos one could embed into a webpage. With this in mind, I focussed on the first two user stories above: generating a list of videos from an array of objects and then allowing the user to select which to view. Clicking on one of the gallery videos will load it in the top part of the page, with a larger frame and different background to distinguish it. 

## Design

The colour scheme was taken from Lyfta's website and a sans-serif font downloaded to approximate Lyfta's use of GT Walsheim.

## Further Possible Steps

The most obvious steps would be to address further issues made. In addition, the following suggested themselves over the course of the project:

- make main video responsive to change in browser and screen widths. This is particularly an issue with turning phone screens.
- it seemed a good idea to store the times in a single unit (seconds) but it would look more natural to present the information on the page in the format *hours : minutes : seconds*. 
- remove videos from the gallery view when they are being played and return them when another is selected

## Image
<p align="center">
  
<img src="https://user-images.githubusercontent.com/68148169/159185210-39ab0533-3d38-40da-b23d-b951d284bf77.png" alt="screenshot of website">
  
</p>
