package com.Pongdang_Server2.interview.controller;

import com.Pongdang_Server2.interview.entity.InterviewEntity;
import com.Pongdang_Server2.interview.repository.InterviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // Json 형태 결과값 반환
@RequiredArgsConstructor // final 객체를 Constructor Injection (Autowired 역할)
@RequestMapping("/v1") // version1의 api
public class InterviewController {

    private final InterviewRepository interviewRepository;

    /**
     * 조회
     *
     * @return
     */
    @GetMapping("interview")
    public List<InterviewEntity> findAllInterview(@RequestParam String keyword) {
        // interviewRepository에서 keyword와 관련된 정보 조회 로직 작성
        // 예: interviewRepository.findByTitleContaining(keyword);
        return interviewRepository.findByInterview_titleContaining(keyword);
    }

}
