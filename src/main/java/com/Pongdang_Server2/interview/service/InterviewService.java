package com.Pongdang_Server2.interview.service;

import com.Pongdang_Server2.interview.dto.InterviewDTO;
import com.Pongdang_Server2.interview.entity.InterviewEntity;
import com.Pongdang_Server2.interview.repository.InterviewRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service // 스프링이 관리해주는 객체 == 스프링 빈
@RequiredArgsConstructor // controller와 같이. final 변수 생성자 만드는 역할
public class InterviewService {

    // 생성자 주입
    private final InterviewRepository interviewRepository;

    public void save(InterviewDTO interviewDTO) {
        // repositroy save 메소드 호출
        InterviewEntity interviewEntity = InterviewEntity.toInterviewEntity(interviewDTO);
        interviewRepository.save(interviewEntity);
    }
}
