package com.Pongdang_Server2.interview.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name = "interview")
public class InterviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long id;

    @Column(unique = true, name = "interviewTitle")
    private String interviewTitle;

    @Column(name = "interviewee")
    private String interviewee;

    @Column(name = "subtitle")
    private String subtitle;

    @Column(name = "numRock")
    private String numRock;

    public InterviewEntity(String interviewTitle, String interviewee, String subtitle, String numRock) {
        this.interviewTitle = interviewTitle;
        this.interviewee = interviewee;
        this.subtitle = subtitle;
        this.numRock = numRock;
    }
}
