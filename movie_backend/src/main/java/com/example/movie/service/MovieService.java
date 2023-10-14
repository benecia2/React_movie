package com.example.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.movie.dto.Movie;
import com.example.movie.repository.MovieRepository;

@Service
public class MovieService {
	@Autowired
	private MovieRepository movieRepository;
	
	//추가
	public Movie insert(Movie movie) {
		return movieRepository.save(movie);
	}
	
	//전체보기
	public List<Movie>list(){
		return movieRepository.findAll();
	}
	
	//삭제
	public void delete(Long id) {
		movieRepository.deleteById(id);
	}
}
