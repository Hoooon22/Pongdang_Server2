package com.Pongdang_Server2.interview.dto;

import com.Pongdang_Server2.interview.entity.InterviewEntity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

// Add lombok dependency
@Getter
@Setter
@NoArgsConstructor
@ToString
public class InterviewDTO {
    private Long id;
    private String interviewTitle;
    private String interviewee;
    private String subtitle;

    public static InterviewDTO toInterviewDTO(InterviewEntity interviewEntity) {
        InterviewDTO interviewDTO = new InterviewDTO();
        interviewDTO.setId(interviewEntity.getId());
        interviewDTO.setInterviewTitle(interviewEntity.getInterviewTitle());
        interviewDTO.setInterviewee(interviewEntity.getInterviewee());
        interviewDTO.setSubtitle(interviewEntity.getSubtitle());

        return interviewDTO;
    }
}
