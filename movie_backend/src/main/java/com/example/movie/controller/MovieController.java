package com.example.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.movie.dto.Movie;
import com.example.movie.service.MovieService;

@RestController
public class MovieController {
	@Autowired
	private MovieService movieService;
	
	//추가
	@PostMapping("/movie/insert")
	public Movie insert(@RequestBody Movie movie) {
		return movieService.insert(movie);
	}
	
	
	//전체보기
	@GetMapping("/movie/list")
	public List<Movie>list(){
		return movieService.list();
	}
	
	//삭제
	@DeleteMapping("/movie/delete/{id}")
	public void delete(@PathVariable Long id) {
		movieService.delete(id);
	}
}
