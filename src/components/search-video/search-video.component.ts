import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Video} from '../../models/video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'sqts-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchVideoComponent implements OnInit {
  public videos: Video[];
  public searchText: string;

  private pageSize: number;

  constructor(private videoService: VideoService) {
    this.searchText = '';
    this.pageSize = 20;

    this.videos = videoService.getAllVideos(this.pageSize);
 }

  ngOnInit() {
  }

  search() {
    this.videos = this.videoService.searchVideos(this.searchText, this.pageSize);
  }
}