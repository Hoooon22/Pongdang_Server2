package com.Pongdang_Server2.interview.dto;

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

    // public static InterviewDTO toInterviewDTO() {}
}
