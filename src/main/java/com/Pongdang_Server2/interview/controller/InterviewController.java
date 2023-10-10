package com.Pongdang_Server2.interview.controller;

import com.Pongdang_Server2.interview.service.InterviewService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor // InterviewService에 대한 것들을 사용 가능
public class InterviewController {

    // 생성자 주입
    private final InterviewService interviewService;

    // 인터뷰
}
